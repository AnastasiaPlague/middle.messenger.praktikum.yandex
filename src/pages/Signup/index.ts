import { Block } from "utils";
import { Button, Form, Link } from "components";
import css from "./signup.module.scss";

export class Signup extends Block {
  constructor() {
    super({});
  }

  protected init() {
    this.children = {
      form: new Form({
        className: css.signupForm,
        id: "signup",
        fields: [
          {
            label: "Почта",
            name: "email",
            placeholder: "Введите почту",
            type: "email",
            id: "email",
            className: css.signupEmail,
          },
          {
            label: "Логин",
            name: "login",
            placeholder: "Введите логин",
            type: "text",
            id: "login",
          },
          {
            label: "Имя",
            name: "first_name",
            placeholder: "Введите имя",
            type: "text",
            id: "first_name",
          },
          {
            label: "Фамилия",
            name: "second_name",
            placeholder: "Введите фамилию",
            type: "text",
            id: "second_name",
          },
          {
            label: "Телефон",
            name: "phone",
            placeholder: "Введите телефон",
            type: "tel",
            id: "phone",
          },
          {
            label: "Пароль",
            name: "password",
            placeholder: "Введите пароль",
            type: "password",
            id: "password",
            autocomplete: "new-password",
          },
          {
            label: "Пароль (ещё раз)",
            name: "confirm_password",
            placeholder: "Повторите пароль",
            type: "password",
            autocomplete: "new-password",
            id: "confirm_password",
          },
        ],
      }),
      signupButton: new Button({ text: "Создать аккаунт", formId: "signup" }),
      linkSignin: new Link({
        text: "Войти",
        href: "/",
        className: css.signupLink,
      }),
    };
  }

  render() {
    return this.compile(
      `
      <div class="${css.signup} fullscreen-centered">
        <div class="${css.signupContainer} container">
          <div class="card">
          <h1 class="${css.signupTitle}">Регистрация</h1>
          {{{form}}}
          <div class="${css.signupControls}">
            {{{signupButton}}}
            {{{linkSignin}}}
          </div>
          </div>
        </div>
      </div>
    `,
      this.props,
    );
  }
}
