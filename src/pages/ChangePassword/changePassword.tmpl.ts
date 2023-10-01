import css from "./changePassword.module.scss";

export const tmpl = `
<div class="container ${css.container}">
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
        </div>
      </form>
    </div>
  </div>
</div>
`;
