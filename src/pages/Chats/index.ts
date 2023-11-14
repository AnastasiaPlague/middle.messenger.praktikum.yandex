import { Block } from "utils";
import { Button, Link } from "components";
import ChatsController from "controllers/ChatsController";
import { State, withStore } from "utils/Store";

import {
  Chat,
  ChatsList,
  NewChatForm,
  AddUserForm,
  RemoveUserForm,
} from "./components";
import css from "./chats.module.scss";
import { Routes } from "const";

export class BaseChats extends Block {
  init() {
    this.children = {
      chat: new Chat({}),
      chatsList: new ChatsList({}),
      profileLink: new Link({
        text: "Профиль >",
        href: Routes.Profile,
        className: css.profileLink,
      }),
      button: new Button({
        text: "Добавить чат",
        className: css.chatsAddButton,
        events: {
          click: () => this.handleOpenPopup("#new-chat-popup"),
        },
      }),
      newChatForm: new NewChatForm({
        closePopup: () => this.handleClosePopup("#new-chat-popup"),
      }),
      addUserForm: new AddUserForm({
        closePopup: () => this.handleClosePopup("#add-user-popup"),
      }),
      removeUserForm: new RemoveUserForm({
        closePopup: () => this.handleClosePopup("#remove-user-popup"),
      }),
    };
  }

  componentDidMount(): void {
    this.getChats();
  }

  getChats() {
    ChatsController.getChats();
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
      <div class=${css.chats}>
        <div class=${css.chatsContainer}>
          <div class=${css.chatsInnerContainer}>
            <nav class=${css.chatsNav}>
             {{{profileLink}}}
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
       <div id="new-chat-popup" class="${css.chatsPopup}">
        {{{newChatForm}}}
       </div>
       <div id="add-user-popup" class="${css.chatsPopup}">
        {{{addUserForm}}}
       </div>
        <div id="remove-user-popup" class="${css.chatsPopup}">
        {{{removeUserForm}}}
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
