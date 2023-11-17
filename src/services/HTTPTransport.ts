enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type Options = {
  method: METHOD;
  data?: any;
  timeout?: number;
  headers?: Headers;
  retries?: number;
};

type OptionsWithoutMethod = Omit<Options, "method">;

type HTTPMethod = <T = XMLHttpRequest>(
  url: string,
  options?: OptionsWithoutMethod,
) => Promise<T>;

export function fetchWithRetry(
  basePath: string,
  url: string,
  options: Options = { method: METHOD.GET },
): Promise<XMLHttpRequest> {
  const { retries = 1 } = options;

  function onError(err: any) {
    const triesLeft = retries - 1;
    if (!triesLeft) {
      throw err;
    }

    return fetchWithRetry(basePath, url, { ...options, retries: triesLeft });
  }

  return new HTTPTransport(basePath).request(url, options).catch(onError);
}

function queryStringify(data: any): string | null {
  if (!data) {
    return null;
  }
  const arr = [];
  for (const [key, value] of Object.entries(data)) {
    arr.push(`${key}=${value}`);
  }

  return "?" + arr.join("&");
}

export class HTTPTransport {
  static API_URL = "https://ya-praktikum.tech/api/v2";
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get: HTTPMethod = (url, options = {}) => {
    const queryParams = queryStringify(options.data);

    return this.request(url, {
      ...options,
      data: queryParams,
      method: METHOD.GET,
    });
  };

  public put: HTTPMethod = (url, options = {}) => {
    return this.request(url, {
      ...options,
      method: METHOD.PUT,
    });
  };

  public post: HTTPMethod = (url, options = {}) => {
    return this.request(url, {
      ...options,
      method: METHOD.POST,
    });
  };

  public delete: HTTPMethod = (url, options = {}) => {
    return this.request(url, {
      ...options,
      method: METHOD.DELETE,
    });
  };

  request<Response = XMLHttpRequest>(
    url: string,
    options: Options = { method: METHOD.GET, timeout: 5000 },
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      const { method, data, headers, timeout } = options;
      const xhr = new XMLHttpRequest();

      xhr.open(method, this.endpoint + url);

      if (headers) {
        for (const [header, value] of Object.entries(headers)) {
          xhr.setRequestHeader(header, value);
        }
      }

      xhr.withCredentials = true;
      xhr.responseType = "json";

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.onload = function () {
        resolve(xhr.response);
      };

      if (timeout) {
        xhr.timeout = timeout;
      }

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
