import { ChatsAPI, NewChat } from "api/ChatsApi";
import store from "utils/Store";
import MessagesController from "./MessagesController";
import UserController from "./UserController";

type UserActionsDataType = { login: string; chatId: number };

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

  async removeChat(data: { chatId: number }) {
    MessagesController.closeById(data.chatId);
    await this.api.removeChat(data);
    store.set("activeChat", null);
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

  async addUserToChat({ login, chatId }: UserActionsDataType) {
    try {
      const users = await UserController.searchUser({ login });
      if (users?.length === 1) {
        await this.api.addUserToChat({ users: [users?.[0].id], chatId });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async removeUserFromChat({ login, chatId }: UserActionsDataType) {
    try {
      const users = await UserController.searchUser({ login });
      if (users?.length === 1) {
        await this.api.removeUserFromChat({ users: [users?.[0].id], chatId });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatsController();
