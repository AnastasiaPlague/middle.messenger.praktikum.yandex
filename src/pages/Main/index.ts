import Handlebars from "handlebars";

import { tmpl } from "./main.tmpl";
import { Button, Input } from "components";

export const Main = () => {
  return Handlebars.compile(tmpl)({
    nameInput: Input({
      label: "Имя",
      name: "name",
      placeholder: "Введите имя",
      type: "text",
    }),
    passwordInput: Input({
      label: "Пароль",
      name: "password",
      placeholder: "Введите пароль",
      type: "password",
    }),
    loginButton: Button({ text: "Войти" }),
  });
};
