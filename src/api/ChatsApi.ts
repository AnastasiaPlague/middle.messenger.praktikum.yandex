import { API } from "./api";

export type NewChat = {
  title: string;
};

export type ChatType = {
  id: number;
  title: string;
  avatar: null | string;
  created_by: number;
  unread_count: number;
  last_message: null | string;
};

export type ChatsType = Array<ChatType>;

type UserActionType = { users: Array<number>; chatId: number };
export class ChatsAPI extends API {
  constructor() {
    super("/chats");
  }

  getChats(): Promise<ChatsType> {
    return this.http.get("");
  }

  addChat(data: NewChat): Promise<void> {
    return this.http.post("", { data });
  }

  removeChat(data: { chatId: number }): Promise<void> {
    return this.http.delete("", { data });
  }

  getChatToken(id: number): Promise<{ token: string }> {
    return this.http.post(`/token/${id}`);
  }

  addUserToChat(data: UserActionType) {
    return this.http.put("/users", { data });
  }

  removeUserFromChat(data: UserActionType) {
    return this.http.delete("/users", { data });
  }
}
