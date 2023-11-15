import { API } from "./api";

export type SignUpData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type SignInData = {
  login: string;
  password: string;
};

export type User = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

export class AuthAPI extends API {
  constructor() {
    super("/auth");
  }

  signin(data: SignInData): Promise<void> {
    return this.http.post("/signin", { data });
  }

  signup(data: SignUpData): Promise<void> {
    return this.http.post("/signup", { data });
  }

  logout(): Promise<void> {
    return this.http.post("/logout");
  }

  getUser(): Promise<User> {
    return this.http.get("/user");
  }
}
