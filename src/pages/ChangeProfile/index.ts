import Handlebars from "handlebars";
import { Button, Input } from "components";
import { USER_MOCK_DATA } from "const";

import { tmpl } from "./changeProfile.tmpl";
import css from "./changeProfile.module.scss";

export const ChangeProfile = () => {
  return Handlebars.compile(tmpl)({
    userData: USER_MOCK_DATA,
    emailInput: Input({
      label: "Почта",
      name: "email",
      placeholder: "Введите почту",
      type: "email",
      id: "email",
      className: css.changeProfileEmail,
    }),
    loginInput: Input({
      label: "Логин",
      name: "login",
      placeholder: "Введите логин",
      type: "text",
      id: "login",
      className: css.changeProfileLogin,
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
    displayNameInput: Input({
      label: "Имя в чате",
      name: "display_name",
      placeholder: "Введите имя в чате",
      type: "text",
      id: "display_name",
    }),
    phoneInput: Input({
      label: "Телефон",
      name: "phone",
      placeholder: "Введите телефон",
      type: "tel",
      id: "phone",
    }),
    buttonSave: Button({
      text: "Сохранить",
    }),
  });
};
