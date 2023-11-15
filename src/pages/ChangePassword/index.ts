import { Block } from "utils";
import { Button, Form, Link } from "components";
import UserController from "controllers/UserController";
import { UserPassword } from "api/UserApi";

import css from "./changePassword.module.scss";
import { State, withStore } from "utils/Store";
import { Routes } from "const";

export class BaseChangePassword extends Block {
  init() {
    this.children = {
      form: new Form({
        className: css.changePasswordForm,
        submitData: (data: UserPassword) => UserController.updatePassword(data),
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
        href: Routes.Profile,
      }),
    };
  }

  render() {
    return this.compile(
      `
      <div class="${css.container} container">
        <div class=${css.changePasswordContainer}>
          {{#with user}}
            <div class=${css.changePasswordAvatar}>
              <img class=${css.changePasswordAvatarImg} src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" alt="Аватар пользователя {{first_name}}" width="150" height="150" />
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

function mapStateToProps(state: State) {
  return { user: state.user };
}

export const ChangePassword = withStore(mapStateToProps)(BaseChangePassword);
