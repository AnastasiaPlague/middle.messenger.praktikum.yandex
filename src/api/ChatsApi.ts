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
}
