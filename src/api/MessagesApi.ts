export type Message = {
  content: string;
  time: string;
  chat_id: number;
  user_id: string;
};

export class MessagesApi {
  socket: WebSocket | null = null;
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public connect() {
    this.socket = new WebSocket(this.url);
  }

  public close() {
    console.log("i should close");
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  public send(data: unknown) {
    this.socket?.send(JSON.stringify(data));
  }
}
