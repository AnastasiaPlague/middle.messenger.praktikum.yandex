import Handlebars from "handlebars";
import { Button, Input, Link } from "components";

import { tmpl } from "./signup.tmpl";
import css from "./signup.module.scss";

export const Signup = () => {
  return Handlebars.compile(tmpl)({
    emailInput: Input({
      label: "Почта",
      name: "email",
      placeholder: "Введите почту",
      type: "email",
      id: "email",
      className: css.signupEmail,
    }),
    loginInput: Input({
      label: "Логин",
      name: "login",
      placeholder: "Введите логин",
      type: "text",
      id: "login",
    }),
    firstNameInput: Input({
      label: "Имя",
      name: "first_name",
      placeholder: "Введите имя",
      type: "text",
      id: "first_name",
    }),
    lastNameInput: Input({
      label: "Фамилия",
      name: "last_name",
      placeholder: "Введите фамилию",
      type: "text",
      id: "last_name",
    }),
    phoneInput: Input({
      label: "Телефон",
      name: "phone",
      placeholder: "Введите телефон",
      type: "tel",
      id: "phone",
    }),
    passwordInput: Input({
      label: "Пароль",
      name: "password",
      placeholder: "Введите пароль",
      type: "password",
      id: "password",
      autocomplete: "new-password",
    }),
    passwordConfirmInput: Input({
      label: "Пароль (ещё раз)",
      name: "confirm_password",
      placeholder: "Повторите пароль",
      type: "password",
      autocomplete: "new-password",
      id: "confirm_password",
    }),
    signupButton: Button({ text: "Создать аккаунт" }),
    linkSignin: Link({
      text: "Войти",
      href: "/",
      className: css.signupLink,
    }),
  });
};
