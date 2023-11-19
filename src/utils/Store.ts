import { User } from "api/AuthApi";
import { EventBus } from "./EventBus";
import { Block } from "./Block";
import { set } from "./set";
import { ChatsType } from "api/ChatsApi";
import { Message } from "api/MessagesApi";

type MessagesType = Record<number, Message[]>;
export interface State {
  user?: User;
  chats?: ChatsType;
  messages: MessagesType;
  activeChat?: number | null;
}

enum StorageEvent {
  UpdateState = "update",
}

class Store extends EventBus {
  private state: State = {
    chats: [],
    messages: [],
    activeChat: null,
  };

  getState() {
    return this.state;
  }

  set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StorageEvent.UpdateState, this.state);
  }
}

const store = new Store();

export function withStore(mapStateToProps: (state: State) => any) {
  return (Component: typeof Block) => {
    return class extends Component {
      constructor(props: any) {
        super({ ...props, ...mapStateToProps(store.getState()) });

        store.on(StorageEvent.UpdateState, () => {
          const propsFromState = mapStateToProps(store.getState());
          this.setProps(propsFromState);
        });
      }
    };
  };
}

export default store;
