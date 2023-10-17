import { Block } from "utils";
import { Button, Form, Link } from "components";

import css from "./main.module.scss";

export class Main extends Block {
  constructor() {
    super("div", {});
  }

  init() {
    this.element!.classList.add("fullscreen-centered");
    this.children = {
      form: new Form({
        className: css.loginForm,
        id: "login",
        fields: [
          {
            label: "Логин",
            name: "login",
            placeholder: "Введите логин",
            type: "text",
            id: "login",
          },
          {
            label: "Пароль",
            name: "password",
            placeholder: "Введите пароль",
            type: "password",
            id: "password",
          },
        ],
      }),
      loginButton: new Button({ text: "Войти", formId: "login" }),
      linkAuth: new Link({
        text: "Нет аккаунта?",
        href: "/sign-up",
        className: css.loginLink,
      }),
    };
  }

  render() {
    return this.compile(
      `
      <div class="${css.container} container">
        <div class="card ${css.loginCard}">
          <h1 class=${css.loginTitle}>Авторизация</h1>
          {{{form}}}
          <div class=${css.loginControls}>
            {{{loginButton}}}
            {{{linkAuth}}}
          </div>
        </div>
      </div>
    `,
      this.props
    );
  }
}
