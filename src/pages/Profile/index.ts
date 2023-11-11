import { Block } from "utils";
import { State, withStore } from "utils/Store";
import AuthController from "controllers/AuthController";

import { Button, Link } from "components";

import css from "./profile.module.scss";

export class BaseProfile extends Block {
  init() {
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
      linkLogout: new Button({
        text: "Выйти",
        events: {
          click: () => AuthController.logout(),
        },
        className: css.profileControlsDanger,
      }),
    };
  }

  render() {
    return this.compile(
      `
      <div class="${css.container} container">
        <div class=${css.profileContainer}>
          {{#with user}}
            <div class=${css.profileAvatar}>
              <img class=${css.profileAvatarImg} src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" alt="Аватар пользователя {{first_name}}" width="150" height="150" />
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
            <div class=${css.profileControlsLogout}>
              {{{linkLogout}}}
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

export const Profile = withStore(mapStateToProps)(BaseProfile);
