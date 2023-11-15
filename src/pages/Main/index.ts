import { Block } from "utils";
import { Button, Form, Link } from "components";

import css from "./main.module.scss";
import AuthController from "controllers/AuthController";
import { SignInData } from "api/AuthApi";
import { Routes } from "const";

export class Main extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children = {
      form: new Form({
        className: css.loginForm,
        id: "signin",
        submitData: (data: SignInData) => AuthController.signin(data),
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
      loginButton: new Button({ text: "Войти", formId: "signin" }),
      linkAuth: new Link({
        text: "Нет аккаунта?",
        href: Routes.Register,
        className: css.loginLink,
      }),
    };
  }

  render() {
    return this.compile(
      `
      <div class="fullscreen-centered">
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
      </div>
    `,
      this.props,
    );
  }
}
