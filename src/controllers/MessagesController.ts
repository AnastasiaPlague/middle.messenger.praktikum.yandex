import { MessagesApi } from "api/MessagesApi";
import ChatsController from "./ChatsController";
import store from "utils/Store";

export class MessagesController {
  sockets: Record<number, MessagesApi | null> = {};
  heartbeats: Record<number, number | undefined> = {};

  public async connect(chatId: number) {
    if (this.sockets[chatId] || !chatId) {
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

    ws.socket?.addEventListener("message", (message: MessageEvent) =>
      this.onMessage(message, chatId),
    );

    ws.socket?.addEventListener("close", () => this.onClose(chatId));
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
      console.log(e);
    }
  }

  onMessage(message: MessageEvent, chatId: number) {
    const received = JSON.parse(message?.data);
    const previousMessages = store.getState().messages;

    if (received.type === "message") {
      store.set(`messages.${chatId}`, [
        ...(previousMessages[chatId] || []),
        received,
      ]);
    } else if (Array.isArray(received)) {
      store.set(`messages.${chatId}`, [...received.reverse()]);
    }
  }

  closeById(id: number) {
    this.sockets[id]?.close();
  }

  onClose(id: number) {
    delete this.sockets[id];
    if (this.heartbeats[id]) {
      clearInterval(this.heartbeats[id]);
    }
    delete this.heartbeats[id];
  }

  closeAll() {
    Object.values(this.sockets).forEach((socket) => socket?.close());
    Object.values(this.heartbeats).forEach((intervalId) =>
      clearInterval(intervalId),
    );
  }
}

export default new MessagesController();
