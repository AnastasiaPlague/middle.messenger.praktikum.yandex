import css from "./changeProfile.module.scss";

export const tmpl = `
<div class="container ${css.container}">
  <div class=${css.changeProfileContainer}>
    {{#with userData}}
      <div class=${css.changeProfileAvatar}>
        <img class=${css.changeProfileAvatarImg} src="{{avatar}}" alt="Аватар пользователя {{first_name}}" width="150" height="150" />
      </div>
    {{/with}}
      <form class=${css.changeProfileForm}>
        {{{emailInput}}}
        {{{loginInput}}}
        {{{firstNameInput}}}
        {{{lastNameInput}}}
        {{{displayNameInput}}}
        {{{phoneInput}}}
        <div class=${css.changeProfileControls}>
          {{{buttonSave}}}
        </div>
      </form>
    </div>
  </div>
</div>
`;
