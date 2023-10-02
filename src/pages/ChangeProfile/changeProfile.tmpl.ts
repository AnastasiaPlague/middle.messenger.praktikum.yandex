import css from "./changeProfile.module.scss";

export const tmpl = `
<div class="container ${css.container}">
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
      <form class=${css.profileForm}>
        {{{emailInput}}}
        {{{loginInput}}}
        {{{firstNameInput}}}
        {{{lastNameInput}}}
        {{{displayNameInput}}}
        {{{phoneInput}}}
        <div class=${css.profileControls}>
          {{{buttonSave}}}
          {{{linkProfile}}}
        </div>
      </form>
    </div>
  </div>
</div>
`;
