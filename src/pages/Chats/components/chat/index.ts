import { Block } from "utils";
import { Form } from "components";
import { State, withStore } from "utils/Store";
import MessagesController from "controllers/MessagesController";

import css from "./chat.module.scss";

class BaseChat extends Block {
  init() {
    this.children = {
      form: new Form({
        className: css.formWrapper,
        submitData: this.handleSubmit.bind(this),
        id: "chat",
        fields: [
          {
            name: "message",
            placeholder: "Введите сообщение",
            type: "text",
            id: "message",
            className: css.chatInput,
            optional: true,
            autocomplete: "off",
          },
        ],
      }),
    };
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (oldProps.activeChat !== newProps.activeChat) {
      MessagesController.getMessages(this.props.activeChat);
    }
    return true;
  }

  handleSubmit(message: { message: string }) {
    MessagesController.send(this.props.activeChat, message);
    const input = document.getElementById("message") as HTMLInputElement;
    input.value = "";
  }

  render() {
    const { id } = this.props.user;

    return this.compile(
      `
      <div class=${css.chatWrapper}>
      {{#with chat}} 
       <header class=${css.chatNav}>
          <img class=${css.chatNavAvatar} {{#if avatar}} src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" {{/if}}  width="37" height="37" alt='Аватар'>
          <p class=${css.chatNavUsername}>{{title}}</p>
          <button class=${css.chatNavActionsButton} aria-label="Управление чатом">
            <svg xmlns="http://www.w3.org/2000/svg" class=${css.chatNavActionsIcon} focusable="false" aria-hidden="true" width="3" height="16" viewBox="0 0 3 16" fill="none">
              <circle cx="1.5" cy="2" r="1.5" fill="currentColor"/>
              <circle cx="1.5" cy="8" r="1.5" fill="currentColor"/>
              <circle cx="1.5" cy="14" r="1.5" fill="currentColor"/>
            </svg>
          </button>
        </header>
        {{/with}}
       <div class=${css.messagesContainer}>  
       {{#each messages}}
          <div class="${css.messagesContent} {{#compare user_id ${id} operator="==="}}${css.messagesYours}{{/compare}}">
          <div>{{content}}</div>
          <span class=${css.messagesTime}>{{formatHH:MM time}}</span>
          </div>
        {{/each}}
        </div>
        <div class=${css.form}>
          <button type="button" class=${css.formActionsButton} aria-label="Отправить сообщение">
          <svg xmlns="http://www.w3.org/2000/svg" class=${css.formActionsIcon}   focusable="false" aria-hidden="true" viewBox="0 0 30 30" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18662 12.5L13.7628 4.92389L14.7056 5.8667L7.12943 13.4428L6.18662 12.5Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70067 15.014L16.2768 7.43781L17.2196 8.38062L9.64348 15.9568L8.70067 15.014Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0433 20.3567L21.6195 12.7806L22.5623 13.7234L14.9861 21.2995L14.0433 20.3567Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5574 22.8706L24.1335 15.2945L25.0763 16.2373L17.5002 23.8134L16.5574 22.8706Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5574 22.8709C13.9423 25.486 9.71181 25.4954 7.10831 22.8919C4.50482 20.2884 4.51424 16.0579 7.12936 13.4428L6.18655 12.5C3.0484 15.6381 3.0371 20.7148 6.16129 23.839C9.28549 26.9632 14.3621 26.9518 17.5003 23.8137L16.5574 22.8709Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6195 12.7806L22.5623 13.7234C25.003 11.2826 25.0118 7.3341 22.5819 4.90417C20.152 2.47424 16.2035 2.48303 13.7627 4.92381L14.7055 5.86662C16.6233 3.94887 19.7257 3.94196 21.6349 5.85119C23.5441 7.76042 23.5372 10.8628 21.6195 12.7806Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70092 15.0144C6.95751 16.7578 6.95123 19.5782 8.68689 21.3138C10.4226 23.0495 13.2429 23.0432 14.9863 21.2998L14.0435 20.357C12.8231 21.5774 10.8489 21.5818 9.63391 20.3668C8.41894 19.1518 8.42334 17.1776 9.64373 15.9572L8.70092 15.0144Z" fill="currentColor"/>
          </svg></button>
          {{{form}}}
          <button class=${css.formSendButton} form="chat" aria-label="Отправить сообщение"><svg xmlns="http://www.w3.org/2000/svg" class=${css.formSendIcon} height="1em" focusable="false" aria-hidden="true" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>
        </div>  
    `,
      this.props,
    );
  }
}

function mapStateToProps(state: State) {
  return {
    chat: state.chats?.find((item) => item.id === state.activeChat),
    user: state.user,
    activeChat: state.activeChat ?? null,
    messages: () => {
      if (state.activeChat) {
        return state.messages[state.activeChat];
      }
      return [];
    },
  };
}

export const Chat = withStore(mapStateToProps)(BaseChat);
