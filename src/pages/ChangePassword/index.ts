import { Block } from "utils";
import { Button, Form, Link } from "components";
import { USER_MOCK_DATA } from "const";

import css from "./changePassword.module.scss";

export class ChangePassword extends Block {
  constructor() {
    super({ userData: USER_MOCK_DATA });
  }

  init() {
    this.children = {
      form: new Form({
        className: css.changePasswordForm,
        id: "change_password",
        fields: [
          {
            label: "Старый пароль",
            name: "oldPassword",
            placeholder: "Введите старый пароль",
            type: "password",
            id: "oldPassword",
          },
          {
            label: "Пароль",
            name: "newPassword",
            placeholder: "Введите пароль",
            type: "password",
            id: "newPassword",
            autocomplete: "new-password",
          },
          {
            label: "Повторите новый пароль",
            name: "confirm_password",
            placeholder: "Повторите пароль",
            type: "password",
            autocomplete: "new-password",
            id: "confirm_password",
          },
        ],
      }),
      buttonSave: new Button({
        text: "Сохранить",
        formId: "change_password",
      }),
      linkProfile: new Link({
        text: "Назад",
        href: "/profile",
      }),
    };
  }

  render() {
    return this.compile(
      `
      <div class="${css.container} container">
        <div class=${css.changePasswordContainer}>
          {{#with userData}}
            <div class=${css.changePasswordAvatar}>
              <img class=${css.changePasswordAvatarImg} src="{{avatar}}" alt="Аватар пользователя {{first_name}}" width="150" height="150" />
            </div>  
          {{/with}}
            {{{form}}}
            <div class=${css.changePasswordControls}>
              {{{buttonSave}}}
              {{{linkProfile}}}
            </div>
          </div>
        </div>
      </div>
    `,
      this.props,
    );
  }
}
