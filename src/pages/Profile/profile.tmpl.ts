import css from "./profile.module.scss";

export const tmpl = `
<div class="container ${css.container}">
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
</div>
`;
