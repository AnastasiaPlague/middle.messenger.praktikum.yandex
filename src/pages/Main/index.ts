import { Block } from "utils";
import { Button, Input, Link } from "components";

import css from "./main.module.scss";

export class Main extends Block {
  constructor() {
    super("div", {});
  }

  init() {
    this.element!.classList.add("fullscreen-centered");
    this.children = {
      loginInput: new Input({
        label: "Логин",
        name: "login",
        placeholder: "Введите логин",
        type: "text",
        id: "login",
      }),
      passwordInput: new Input({
        label: "Пароль",
        name: "password",
        placeholder: "Введите пароль",
        type: "password",
        id: "password",
      }),
      loginButton: new Button({ text: "Войти" }),
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
        <form novalidate class=${css.loginForm}>
          <h1 class=${css.loginTitle}>Авторизация</h1>
          {{{loginInput}}}
          {{{passwordInput}}}
          <div class=${css.loginControls}>
            {{{loginButton}}}
            {{{linkAuth}}}
          </div>
          </form>
        </div>
      </div>
    `,
      this.props
    );
  }
}
