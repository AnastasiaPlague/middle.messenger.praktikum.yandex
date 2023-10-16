import { Block } from "utils";
import { Button, Form, Link } from "components";
import { USER_MOCK_DATA } from "const";

import css from "./changeProfile.module.scss";

export class ChangeProfile extends Block {
  constructor() {
    super("div", { userData: USER_MOCK_DATA });
  }

  init() {
    this.element!.classList.add("container", css.container);
    this.children = {
      form: new Form({
        className: css.profileForm,
        id: "change_profile",
        fields: [
          {
            label: "Почта",
            name: "email",
            value: USER_MOCK_DATA.email,
            placeholder: "Введите почту",
            type: "email",
            id: "email",
            className: css.changeProfileEmail,
          },
          {
            label: "Логин",
            name: "login",
            value: USER_MOCK_DATA.login,
            placeholder: "Введите логин",
            type: "text",
            id: "login",
            className: css.changeProfileLogin,
          },
          {
            label: "Имя",
            name: "first_name",
            value: USER_MOCK_DATA.first_name,
            placeholder: "Введите имя",
            type: "text",
            id: "first_name",
          },
          {
            label: "Фамилия",
            name: "second_name",
            value: USER_MOCK_DATA.second_name,
            placeholder: "Введите фамилию",
            type: "text",
            id: "second_name",
          },
          {
            label: "Имя в чате",
            name: "display_name",
            value: USER_MOCK_DATA.display_name,
            placeholder: "Введите имя в чате",
            type: "text",
            id: "display_name",
          },
          {
            label: "Телефон",
            name: "phone",
            value: USER_MOCK_DATA.phone,
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
        href: "/profile",
      }),
    };
  }

  render() {
    return this.compile(
      `
      <div class=${css.profileContainer}>
        {{#with userData}}
          <form class=${css.profileAvatar}>
            <img class=${css.profileAvatarImg} src="{{avatar}}" alt="Аватар пользователя {{first_name}}" width="150" height="150" />
            <label for="avatar" class=${css.profileAvatarLabel}>
              <p class=${css.profileAvatarLabelText}>Поменять аватар</p>
            </label>
            <input type="file" id="avatar" name="avatar" class=${css.profileAvatarInput} />      
          </form> 
        {{/with}}
          {{{form}}}
          <div class=${css.profileControls}>
            {{{buttonSave}}}
            {{{linkProfile}}}
          </div>
        </div>
      </div>
    `,
      this.props
    );
  }
}
