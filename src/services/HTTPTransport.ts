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

type HTTPMethod = (url: string, options?: Options) => Promise<XMLHttpRequest>;

export function fetchWithRetry(
  url: string,
  options: Options = { method: METHOD.GET },
): Promise<XMLHttpRequest> {
  const { retries = 1 } = options;

  function onError(err: any) {
    const triesLeft = retries - 1;
    if (!triesLeft) {
      throw err;
    }

    return fetchWithRetry(url, { ...options, retries: triesLeft });
  }

  return new HTTPTransport().request(url, options).catch(onError);
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

class HTTPTransport {
  get: HTTPMethod = (url, options = { method: METHOD.GET }) => {
    const queryParams = queryStringify(options.data);

    return this.request(url, {
      ...options,
      data: queryParams,
      method: METHOD.GET,
    });
  };
  put: HTTPMethod = (url, options = { method: METHOD.PUT }) => {
    return this.request(url, options);
  };

  post: HTTPMethod = (url, options = { method: METHOD.POST }) => {
    return this.request(url, options);
  };

  delete: HTTPMethod = (url, options = { method: METHOD.DELETE }) => {
    return this.request(url, options);
  };

  request: HTTPMethod = (
    url,
    options = { method: METHOD.GET, timeout: 5000 },
  ) => {
    return new Promise((resolve, reject) => {
      const { method, data, headers, timeout } = options;
      const xhr = new XMLHttpRequest();

      xhr.open(method, url + (data ?? ""));

      if (headers) {
        for (const [header, value] of Object.entries(headers)) {
          xhr.setRequestHeader(header, value);
        }
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      if (timeout) {
        xhr.timeout = timeout;
      }

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
