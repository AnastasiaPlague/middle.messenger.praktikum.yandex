import Handlebars from "handlebars";
import { Button, Input } from "components";
import { USER_MOCK_DATA } from "const";

import { tmpl } from "./changePassword.tmpl";

export const ChangePassword = () => {
  return Handlebars.compile(tmpl)({
    userData: USER_MOCK_DATA,
    oldPasswordInput: Input({
      label: "Старый пароль",
      name: "old_password",
      placeholder: "Введите старый пароль",
      type: "password",
      id: "email",
    }),
    newPasswordInput: Input({
      label: "Пароль",
      name: "password",
      placeholder: "Введите пароль",
      type: "password",
      id: "password",
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
  });
};
