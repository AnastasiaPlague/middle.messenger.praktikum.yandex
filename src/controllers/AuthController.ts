import { AuthAPI, SignInData, SignUpData } from "api/AuthApi";
import { Routes } from "const";
import Router from "utils/Router";
import store from "utils/Store";

class AuthController {
  private api = new AuthAPI();

  async signin(data: SignInData) {
    try {
      await this.api.signin(data);

      await this.fetchUser();

      Router.go(Routes.Profile);
    } catch (error) {
      console.log(error);
    }
  }

  async signup(data: SignUpData) {
    try {
      await this.api.signup(data);

      Router.go(Routes.Profile);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.api.logout();

      store.set("user", undefined);

      Router.go(Routes.Index);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.getUser();

      store.set("user", user);
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthController();
