import Handlebars from "handlebars";
import { Button, Input, Link } from "components";

import { tmpl } from "./main.tmpl";

export const Main = () => {
  return Handlebars.compile(tmpl)({
    loginInput: Input({
      label: "Логин",
      name: "login",
      placeholder: "Введите логин",
      type: "text",
      id: "login",
    }),
    passwordInput: Input({
      label: "Пароль",
      name: "password",
      placeholder: "Введите пароль",
      type: "password",
      id: "password",
    }),
    loginButton: Button({ text: "Войти" }),
    linkAuth: Link({
      text: "Нет аккаунта?",
      href: "/sign-up",
      className: "login-link",
    }),
  });
};
