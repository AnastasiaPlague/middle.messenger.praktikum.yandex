import css from "./changePassword.module.scss";

export const tmpl = `
<div class="container ${css.container}">
  <div class=${css.changeProfileContainer}>
    {{#with userData}}
      <div class=${css.changeProfileAvatar}>
        <img class=${css.changeProfileAvatarImg} src="{{avatar}}" alt="Аватар пользователя {{first_name}}" width="150" height="150" />
      </div>
      <div class=${css.changeProfileFields}>
        <div class=${css.changeProfileField}>
          <span class=${css.changeProfileFieldName}>Старый пароль</span>
          <span class=${css.changeProfileFieldValue}></span> 
        </div>
        <div class=${css.changeProfileField}>
          <span class=${css.changeProfileFieldName}>Новый пароль</span>
          <span class=${css.changeProfileFieldValue}></span> 
        </div>
        <div class=${css.changeProfileField}>
          <span class=${css.changeProfileFieldName}>Повторите новый пароль</span>
          <span class=${css.changeProfileFieldValue}></span> 
        </div>
      </div>
    {{/with}}
    </div>
    <div class=${css.changeProfileControls}>
      {{{buttonSave}}}
    </div>
  </div>
</div>
`;
