import { Block } from "utils";
import store, { State, withStore } from "utils/Store";
import { RESOURCES_URL } from "const";

import css from "./chatList.module.scss";

class BaseChatList extends Block {
  init() {
    this.setProps({
      events: {
        click: this.handleClick.bind(this),
      },
    });
  }

  handleClick(e: Event & { target: HTMLUListElement }) {
    const parent = e.target.closest("li");
    const id = parent?.getAttribute("data-chat-id");
    store.set("activeChat", Number(id));
  }

  render() {
    return this.compile(
      `
      <ul class=${css.chatList}>
        {{#each chats}}
          <li class="${css.chatListItem} {{#compare id ${this.props.activeChat} operator="==="}}${css.chatListItemActive}{{/compare}}" data-chat-id={{id}}> 
            <div class=${css.chatItem}>
              <img {{#if avatar}} src="${RESOURCES_URL}/{{avatar}}" {{/if}} alt="Аватар чата {{title}}" width="47" height="47" class=${css.chatItemAvatar}>
              <div class=${css.chatItemContent}>
                <div class=${css.chatInfo}>
                  <div class=${css.chatInfoName}>{{title}}</div>
          {{#last_message}}
                  <div class=${css.chatInfoTime}>{{formatDD:HH:MM time}}</div>
                </div>
                <div class=${css.chatInfo}>
                  <div class=${css.chatInfoRecentMessage}>{{content}}</div>
          {{/last_message}}
                  {{#if unreadCount}}
                    <span class=${css.chatInfoUnreadMessage}>{{unreadCount}}</span>
                  {{/if}}
                  </div>
              </div>
            </div>
          </li>
        {{/each}}
      </ul>
    `,
      this.props,
    );
  }
}

function mapStateToProps(state: State) {
  return { chats: state.chats, activeChat: state.activeChat ?? null };
}

export const ChatsList = withStore(mapStateToProps)(BaseChatList);
