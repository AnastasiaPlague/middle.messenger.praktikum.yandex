import css from "./changeProfile.module.scss";

export const tmpl = `
<div class="container ${css.container}">
  <div class=${css.changeProfileContainer}>
    {{#with userData}}
      <div class=${css.changeProfileAvatar}>
        <img class=${css.changeProfileAvatarImg} src="{{avatar}}" alt="Аватар пользователя {{first_name}}" width="150" height="150" />
      </div>
      <div class=${css.changeProfileFields}>
        <div class=${css.changeProfileField}>
          <span class=${css.changeProfileFieldName}>Почта</span>
          <span class=${css.changeProfileFieldValue}>{{email}}</span> 
        </div>
        <div class=${css.changeProfileField}>
          <span class=${css.changeProfileFieldName}>Логин</span>
          <span class=${css.changeProfileFieldValue}>{{login}}</span> 
        </div>
        <div class=${css.changeProfileField}>
          <span class=${css.changeProfileFieldName}>Имя</span>
          <span class=${css.changeProfileFieldValue}>{{first_name}}</span> 
        </div>
        <div class=${css.changeProfileField}>
          <span class=${css.changeProfileFieldName}>Фамилия</span>
          <span class=${css.changeProfileFieldValue}>{{last_name}}</span> 
        </div>
        <div class=${css.changeProfileField}>
          <span class=${css.changeProfileFieldName}>Имя в чате</span>
          <span class=${css.changeProfileFieldValue}>{{display_name}}</span> 
        </div>
        <div class=${css.changeProfileField}>
          <span class=${css.changeProfileFieldName}>Телефон</span>
          <span class=${css.changeProfileFieldValue}>{{phone}}</span> 
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
