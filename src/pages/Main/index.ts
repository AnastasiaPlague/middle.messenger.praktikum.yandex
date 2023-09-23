import Handlebars from "handlebars";

import { tmpl } from "./main.tmpl";
import { Button, Input, Link } from "components";

export const Main = () => {
  return Handlebars.compile(tmpl)({
    nameInput: Input({
      label: "Имя",
      name: "login",
      placeholder: "Введите имя",
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
