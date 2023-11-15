import { Block } from "utils";
import { State, withStore } from "utils/Store";
import ChatsController from "controllers/ChatsController";

import css from "./header.module.scss";

class BaseHeader extends Block {
  constructor() {
    super({});
  }
  init() {
    this.setProps({
      events: {
        click: this.handleClick.bind(this),
      },
    });
  }

  handleClick(e: Event & { target: HTMLElement }) {
    if (e.target.id === "chat-controls") {
      document
        .querySelector("#chat-actions")
        ?.classList.toggle(css.chatNavActionsPopupShow);
    }
    if (e.target.dataset.target) {
      this.handleOpenPopup(e.target.dataset.target);
    }

    if (e.target.dataset.remove === "true") {
      ChatsController.removeChat({ chatId: this.props.chat.id });
    }
  }

  handleOpenPopup(selector: string): void {
    const popup = document.querySelector(selector);
    popup?.classList.add("popupShow");

    popup?.addEventListener("click", (e) => {
      if (e.target === popup) {
        this.handleClosePopup(selector);
      }
    });
  }

  handleClosePopup(selector: string): void {
    const popup = document.querySelector(selector);
    popup?.classList.remove("popupShow");
  }

  render() {
    return this.compile(
      `
      {{#with chat}} 
       <header class=${css.chatNav}>
          <img class=${css.chatNavAvatar} {{#if avatar}} src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" {{/if}}  width="37" height="37" alt='Аватар'>
          <p class=${css.chatNavUsername}>{{title}}</p>
          <button id="chat-controls" class=${css.chatNavActionsButton} aria-label="Управление чатом">
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" width="3" height="16" viewBox="0 0 3 16" fill="none">
              <circle cx="1.5" cy="2" r="1.5" fill="currentColor"/>
              <circle cx="1.5" cy="8" r="1.5" fill="currentColor"/>
              <circle cx="1.5" cy="14" r="1.5" fill="currentColor"/>
            </svg>
          </button>
          <div class="${css.chatNavActionsPopup}" id="chat-actions">
            <button data-target='#add-user-popup' class="${css.chatNavActionsPopupButton}" type="button">Добавить пользователя</button>
            <button data-target='#remove-user-popup' class="${css.chatNavActionsPopupButton}" type="button">Удалить пользователя</button>
            {{#compare created_by ${this.props.user?.id} operator="==="}} <button data-remove="true" class="${css.chatNavActionsPopupButton} ${css.chatNavActionsPopupButtonDanger}" type="button">Удалить чат</button>{{/compare}}
           
          </div>
        </header>
        {{/with}}
    `,
      this.props,
    );
  }
}

function mapStateToProps(state: State) {
  return {
    chat: state.chats?.find((item) => item.id === state.activeChat),
    user: state.user,
  };
}

export const Header = withStore(mapStateToProps)(BaseHeader);
