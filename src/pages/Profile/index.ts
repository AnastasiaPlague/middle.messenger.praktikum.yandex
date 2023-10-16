import { Block } from "utils";

import { Link } from "components";
import { USER_MOCK_DATA } from "const";

import css from "./profile.module.scss";

export class Profile extends Block {
  constructor() {
    super("div", { userData: USER_MOCK_DATA });
  }

  init() {
    this.element!.classList.add("container", css.container);
    this.children = {
      linkChangeProfile: new Link({
        text: "Изменить данные",
        href: "/change-profile",
        className: css.profileControlsLink,
      }),
      linkChangePassword: new Link({
        text: "Изменить пароль",
        href: "/change-password",
        className: css.profileControlsLink,
      }),
      linkChats: new Link({
        text: "Назад к чатам",
        href: "/chats",
        className: css.profileControlsLink,
      }),
      linkLogout: new Link({
        text: "Выйти",
        href: "/",
        className: css.profileControlsDanger,
      }),
    };
  }

  render() {
    return this.compile(
      `
      <div class=${css.profileContainer}>
        {{#with userData}}
          <div class=${css.profileAvatar}>
            <img class=${css.profileAvatarImg} src="{{avatar}}" alt="Аватар пользователя {{first_name}}" width="150" height="150" />
          </div>
          <p class=${css.profileName}>{{display_name}}</p>
          <div class=${css.profileFields}>
            <div class=${css.profileField}>
              <span class=${css.profileFieldName}>Почта</span>
              <span class=${css.profileFieldValue}>{{email}}</span> 
            </div>
            <div class=${css.profileField}>
              <span class=${css.profileFieldName}>Логин</span>
              <span class=${css.profileFieldValue}>{{login}}</span> 
            </div>
            <div class=${css.profileField}>
              <span class=${css.profileFieldName}>Имя</span>
              <span class=${css.profileFieldValue}>{{first_name}}</span> 
            </div>
            <div class=${css.profileField}>
              <span class=${css.profileFieldName}>Фамилия</span>
              <span class=${css.profileFieldValue}>{{second_name}}</span> 
            </div>
            <div class=${css.profileField}>
              <span class=${css.profileFieldName}>Имя в чате</span>
              <span class=${css.profileFieldValue}>{{display_name}}</span> 
            </div>
            <div class=${css.profileField}>
              <span class=${css.profileFieldName}>Телефон</span>
              <span class=${css.profileFieldValue}>{{phone}}</span> 
            </div>
          </div>
        {{/with}}
        </div>
        <div class=${css.profileControls}>
          {{{linkChangeProfile}}}
          {{{linkChangePassword}}}
          {{{linkChats}}}
          {{{linkLogout}}}
        </div>
      </div>
    `,
      this.props
    );
  }
}
