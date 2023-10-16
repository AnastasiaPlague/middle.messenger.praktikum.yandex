import { Block } from "utils";
import { Button, Input, Link } from "components";
import { USER_MOCK_DATA } from "const";

import css from "./changePassword.module.scss";

export class ChangePassword extends Block {
  constructor() {
    super("div", { userData: USER_MOCK_DATA });
  }

  init() {
    this.element!.classList.add("container", css.container);

    this.children = {
      oldPasswordInput: new Input({
        label: "Старый пароль",
        name: "oldPassword",
        placeholder: "Введите старый пароль",
        type: "password",
        id: "oldPassword",
      }),
      newPasswordInput: new Input({
        label: "Пароль",
        name: "newPassword",
        placeholder: "Введите пароль",
        type: "password",
        id: "newPassword",
        autocomplete: "new-password",
      }),
      passwordConfirmInput: new Input({
        label: "Повторите новый пароль",
        name: "confirm_password",
        placeholder: "Повторите пароль",
        type: "password",
        autocomplete: "new-password",
        id: "confirm_password",
      }),
      buttonSave: new Button({
        text: "Сохранить",
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
      <div class=${css.changePasswordContainer}>
        {{#with userData}}
          <div class=${css.changePasswordAvatar}>
            <img class=${css.changePasswordAvatarImg} src="{{avatar}}" alt="Аватар пользователя {{first_name}}" width="150" height="150" />
          </div>  
        {{/with}}
          <form class=${css.changePasswordForm}>
            {{{oldPasswordInput}}}
            {{{newPasswordInput}}}
            {{{passwordConfirmInput}}} 
            <div class=${css.changePasswordControls}>
              {{{buttonSave}}}
              {{{linkProfile}}}
            </div>
          </form>
        </div>
      </div>
    `,
      this.props
    );
  }
}
