import { Block } from "utils";
import { CHAT_MOCK_DATA } from "const";

import css from "./chats.module.scss";

export class Chats extends Block {
  constructor() {
    super("div", { data: CHAT_MOCK_DATA });
  }

  init() {
    this.element!.classList.add(css.chats);
  }

  render() {
    return this.compile(
      `
      <div class=${css.chatsContainer}>
        <div class=${css.chatsInnerContainer}>
          <nav class=${css.chatsNav}>
            <a class=${css.profileLink} href="/profile">Профиль <svg xmlns="http://www.w3.org/2000/svg" class=${css.profileIcon} height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></a>
            <form class=${css.search}>
              <input class=${css.searchInput} name="search" type="search" placeholder="Поиск"/>
              <div class=${css.searchIconContainer}>
                <svg class=${css.searchIcon} viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              </div>
            </form>
          </nav>
          <ul class=${css.chatList}>
            {{#each data}}
              <li class=${css.chatListItem}> 
              {{#user}}
                <div class=${css.chatItem}>
                  <img src="{{avatar}}" alt="Аватар пользователя {{name}}" width="47" height="47" class=${css.chatItemAvatar}>
                  <div class=${css.chatItemContent}>
                    <div class=${css.chatInfo}>
                      <div class=${css.chatInfoName}>{{name}}</div>
              {{/user}}
              {{#message}}
                      <div class=${css.chatInfoTime}>{{timestamp}}</div>
                    </div>
                    <div class=${css.chatInfo}>
                      <div class=${css.chatInfoRecentMessage}>{{content}}</div>
              {{/message}}
                      {{#if unreadMessages}}
                        <span class=${css.chatInfoUnreadMessage}>{{unreadMessages}}</span>
                      {{/if}}
                      </div>
                  </div>
                </div>
              </li>
            {{/each}}
          </ul>
        </div>
      </div>
      <div class=${css.currentChat}>
        <p>Выберите чат чтобы отправить сообщение</p>
      </div>
    `,
      this.props
    );
  }
}
