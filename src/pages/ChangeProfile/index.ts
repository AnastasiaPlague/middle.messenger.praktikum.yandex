import { Block } from "utils";
import { Button, Form, Link } from "components";
import { State, withStore } from "utils/Store";

import css from "./changeProfile.module.scss";
import { UserProfile } from "api/UserApi";
import UserController from "controllers/UserController";
import { Avatar } from "./сomponents";
import { Routes } from "const";

export class BaseChangeProfile extends Block {
  init() {
    this.children = {
      avatar: new Avatar({}),
      form: new Form({
        className: css.profileForm,
        id: "change_profile",
        submitData: (data: UserProfile) => UserController.updateProfile(data),
        fields: [
          {
            label: "Почта",
            name: "email",
            value: this.props.user.email,
            placeholder: "Введите почту",
            type: "email",
            id: "email",
            className: css.changeProfileEmail,
          },
          {
            label: "Логин",
            name: "login",
            value: this.props.user.login,
            placeholder: "Введите логин",
            type: "text",
            id: "login",
            className: css.changeProfileLogin,
          },
          {
            label: "Имя",
            name: "first_name",
            value: this.props.user.first_name,
            placeholder: "Введите имя",
            type: "text",
            id: "first_name",
          },
          {
            label: "Фамилия",
            name: "second_name",
            value: this.props.user.second_name,
            placeholder: "Введите фамилию",
            type: "text",
            id: "second_name",
          },
          {
            label: "Имя в чате",
            name: "display_name",
            value: this.props.user.display_name,
            placeholder: "Введите имя в чате",
            type: "text",
            id: "display_name",
          },
          {
            label: "Телефон",
            name: "phone",
            value: this.props.user.phone,
            placeholder: "Введите телефон",
            type: "tel",
            id: "phone",
          },
        ],
      }),
      buttonSave: new Button({
        text: "Сохранить",
        formId: "change_profile",
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
        <div class=${css.profileContainer}>
          {{{avatar}}}
          {{{form}}}
            <div class=${css.profileControls}>
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

export const ChangeProfile = withStore(mapStateToProps)(BaseChangeProfile);
