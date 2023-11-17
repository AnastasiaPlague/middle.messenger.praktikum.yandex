import { Block } from "utils";
import { State, withStore } from "utils/Store";
import UserController from "controllers/UserController";
import { RESOURCES_URL } from "const";

import css from "./avatar.module.scss";

export class Popup extends Block {
  init() {
    // this.element?.hide();
  }

  render() {
    return this.compile(
      `
      <div>popup</div>
    `,
      this.props,
    );
  }
}

export class BaseAvatar extends Block {
  init() {
    this.props.events = {
      input: (e: Event & { target: HTMLInputElement }) => {
        const avatarData = new FormData();
        const files = e.target.files;

        const file = files?.[0];
        if (file) {
          avatarData.append("avatar", file);
          UserController.updateAvatar(avatarData);
          e.target.value = "";
        }
      },
    };
  }

  render() {
    return this.compile(
      `
      {{#with user}}
        <form class=${css.profileAvatar}>
          <img class=${css.profileAvatarImg} src="${RESOURCES_URL}/{{avatar}}" alt="Аватар пользователя {{first_name}}" width="150" height="150" />
          <label for="avatar" class=${css.profileAvatarLabel}>
            <p class=${css.profileAvatarLabelText}>Поменять аватар</p>
          </label>
          <input type="file" id="avatar" name="avatar" class=${css.profileAvatarInput} />      
        </form> 
      {{/with}}
    `,
      this.props,
    );
  }
}

function mapStateToProps(state: State) {
  return { user: state.user };
}

export const Avatar = withStore(mapStateToProps)(BaseAvatar);
