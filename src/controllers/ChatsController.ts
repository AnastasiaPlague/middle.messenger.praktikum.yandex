// import { AuthAPI, SignInData, SignUpData } from "api/AuthApi";
import { ChatsAPI, NewChat } from "api/ChatsApi";
// import { Routes } from "const";
// import Router from "utils/Router";
import store from "utils/Store";

class ChatsController {
  private api = new ChatsAPI();

  async getChats() {
    try {
      const chats = await this.api.getChats();

      store.set("chats", chats);
    } catch (error) {
      console.log(error);
    }
  }

  async addChat(data: NewChat) {
    await this.api.addChat(data);

    this.getChats();
  }
}

export default new ChatsController();
