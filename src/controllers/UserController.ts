import { UserAPI, UserPassword, UserProfile } from "api/UserApi";
import { Routes } from "const";
import Router from "utils/Router";
import store from "utils/Store";

class UserController {
  private api = new UserAPI();

  async updateProfile(data: UserProfile) {
    try {
      const user = await this.api.updateProfile(data);
      store.set("user", user);

      Router.go(Routes.Profile);
    } catch (error) {
      console.log(error);
    }
  }

  async updatePassword(data: UserPassword) {
    try {
      await this.api.updatePassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });

      Router.go(Routes.Profile);
    } catch (error) {
      console.log(error);
    }
  }

  async updateAvatar(data: FormData) {
    try {
      const user = await this.api.updateAvatar(data);
      store.set("user", user);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
