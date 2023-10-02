import Handlebars from "handlebars";
import { Button, Input, Link } from "components";
import { USER_MOCK_DATA } from "const";

import { tmpl } from "./changePassword.tmpl";

export const ChangePassword = () => {
  return Handlebars.compile(tmpl)({
    userData: USER_MOCK_DATA,
    oldPasswordInput: Input({
      label: "Старый пароль",
      name: "oldPassword",
      placeholder: "Введите старый пароль",
      type: "password",
      id: "oldPassword",
    }),
    newPasswordInput: Input({
      label: "Пароль",
      name: "newPassword",
      placeholder: "Введите пароль",
      type: "password",
      id: "newPassword",
      autocomplete: "new-password",
    }),
    passwordConfirmInput: Input({
      label: "Повторите новый пароль",
      name: "confirm_password",
      placeholder: "Повторите пароль",
      type: "password",
      autocomplete: "new-password",
      id: "confirm_password",
    }),
    buttonSave: Button({
      text: "Сохранить",
    }),
    linkProfile: Link({
      text: "Назад",
      href: "/profile",
    }),
  });
};
