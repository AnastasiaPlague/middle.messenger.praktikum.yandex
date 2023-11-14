import { MessagesApi } from "api/MessagesApi";
import ChatsController from "./ChatsController";
import store from "utils/Store";

export class MessagesController {
  sockets: Record<number, MessagesApi | null> = {};
  heartbeats: Record<number, number | undefined> = {};

  public async connect(chatId: number) {
    if (this.sockets[chatId]) {
      return;
    }
    const { token } = await ChatsController.getChatToken(chatId);
    const userId = store.getState().user?.id;
    const ws = new MessagesApi(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`,
    );

    ws.connect();

    this.sockets[chatId] = ws;
    this.heartbeats[chatId] = setInterval(() => {
      ws.send({ type: "ping" });
    }, 8000);

    ws.getSocket?.addEventListener("message", (message: MessageEvent) =>
      this.onMessage(message, chatId),
    );

    ws.getSocket?.addEventListener("close", () => this.onClose(chatId));
  }

  public async send(chatId: number, { message }: { message: string }) {
    try {
      if (!this.sockets[chatId]) {
        await this.connect(chatId);
      }
      if (message) {
        this.sockets[chatId]?.send({
          type: "message",
          content: message,
        });
      }
    } catch (e) {
      console.log(e);
      throw new Error("Couldn't connect");
    }
  }

  public async getMessages(chatId: number) {
    try {
      if (!this.sockets[chatId]) {
        await this.connect(chatId);
      }

      this.sockets[chatId]?.send({
        type: "get old",
        content: "0",
      });
    } catch (e) {
      throw new Error("Couldn't connect");
    }
  }

  onMessage(message: MessageEvent, chatId: number) {
    const received = JSON.parse(message?.data);
    const previousMessages = store.getState().messages;

    if (received.type === "message") {
      store.set(`messages.${chatId}`, [...previousMessages[chatId], received]);
      // как обновлять латест месадж в списке чатов?
    } else if (Array.isArray(received)) {
      store.set(`messages.${chatId}`, [...received.reverse()]);
    }
  }

  onClose(id: number) {
    this.sockets[id] = null;
    if (this.heartbeats[id]) {
      clearInterval(this.heartbeats[id]);
    }
    this.heartbeats[id] = undefined;
  }

  closeAll() {
    Object.values(this.sockets).forEach((socket) => socket?.close());
    Object.values(this.heartbeats).forEach((intervalId) =>
      clearInterval(intervalId),
    );
  }
}

export default new MessagesController();
