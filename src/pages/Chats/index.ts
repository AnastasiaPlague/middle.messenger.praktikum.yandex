import { Block } from "utils";
import { Button } from "components";
import ChatsController from "controllers/ChatsController";
import { State, withStore } from "utils/Store";

import { Chat, NewChatForm, ChatsList } from "./components";
import css from "./chats.module.scss";

export class BaseChats extends Block {
  init() {
    this.children = {
      chat: new Chat({}),
      chatsList: new ChatsList({}),
      button: new Button({
        text: "Добавить чат",
        className: css.chatsAddButton,
        events: {
          click: () => this.handleOpenPopup(),
        },
      }),
      newChatForm: new NewChatForm({
        closePopup: () => this.handleClosePopup(),
      }),
    };
  }

  componentDidMount(): void {
    this.getChats();
  }

  getChats() {
    ChatsController.getChats();
  }

  handleOpenPopup(): void {
    const popup = document.querySelector("#popup");
    popup?.classList.add(css.chatsPopupShow);

    popup?.addEventListener("click", (e) => {
      if (e.target === popup) {
        this.handleClosePopup();
      }
    });
  }

  handleClosePopup(): void {
    const popup = document.querySelector("#popup");
    popup?.classList.remove(css.chatsPopupShow);
  }

  render() {
    return this.compile(
      `
      <div class=${css.chats}>
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
            {{{chatsList}}} 
          </div>
          {{{button}}}
        </div>
          {{#if activeChat}} 
            {{{chat}}}
          {{else}}
            <p class=${css.emptyChat}>Выберите или создайте чат</p>
          {{/if}}
       <div id="popup" class="${css.chatsPopup}">
        {{{newChatForm}}}
       </div>
      </div>
    `,
      this.props,
    );
  }
}

function mapStateToProps(state: State) {
  return { chats: state.chats, activeChat: state.activeChat ?? null };
}
export const Chats = withStore(mapStateToProps)(BaseChats);
