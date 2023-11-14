import { ChatsAPI, NewChat } from "api/ChatsApi";
import store from "utils/Store";
import MessagesController from "./MessagesController";

class ChatsController {
  private api = new ChatsAPI();

  async getChats() {
    try {
      const chats = await this.api.getChats();
      chats.forEach((chat) => {
        if (chat.id) {
          MessagesController.connect(chat.id);
        }
      });
      store.set("chats", chats);
    } catch (error) {
      console.log(error);
    }
  }

  async addChat(data: NewChat) {
    await this.api.addChat(data);

    this.getChats();
  }

  async getChatToken(id: number): Promise<{ token: string }> {
    try {
      return await this.api.getChatToken(id);
    } catch (error) {
      console.log(error);
    }
    return { token: "" };
  }
}

export default new ChatsController();
