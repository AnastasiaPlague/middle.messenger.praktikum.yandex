import Handlebars from "handlebars";
import { Button, Input, Link } from "components";
import { USER_MOCK_DATA } from "const";

import { tmpl } from "./changeProfile.tmpl";
import css from "./changeProfile.module.scss";

export const ChangeProfile = () => {
  return Handlebars.compile(tmpl)({
    userData: USER_MOCK_DATA,
    emailInput: Input({
      label: "Почта",
      name: "email",
      value: USER_MOCK_DATA.email,
      placeholder: "Введите почту",
      type: "email",
      id: "email",
      className: css.changeProfileEmail,
    }),
    loginInput: Input({
      label: "Логин",
      name: "login",
      value: USER_MOCK_DATA.login,
      placeholder: "Введите логин",
      type: "text",
      id: "login",
      className: css.changeProfileLogin,
    }),
    firstNameInput: Input({
      label: "Имя",
      name: "first_name",
      value: USER_MOCK_DATA.first_name,
      placeholder: "Введите имя",
      type: "text",
      id: "first_name",
    }),
    lastNameInput: Input({
      label: "Фамилия",
      name: "second_name",
      value: USER_MOCK_DATA.second_name,
      placeholder: "Введите фамилию",
      type: "text",
      id: "second_name",
    }),
    displayNameInput: Input({
      label: "Имя в чате",
      name: "display_name",
      value: USER_MOCK_DATA.display_name,
      placeholder: "Введите имя в чате",
      type: "text",
      id: "display_name",
    }),
    phoneInput: Input({
      label: "Телефон",
      name: "phone",
      value: USER_MOCK_DATA.phone,
      placeholder: "Введите телефон",
      type: "tel",
      id: "phone",
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
