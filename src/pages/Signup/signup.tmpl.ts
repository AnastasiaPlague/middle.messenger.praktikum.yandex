import css from "./signup.module.scss";

export const tmpl = `
<div class="${css.signup} fullscreen-centered">
  <div class="${css.signupContainer} container">
    <div class="card">
    <h1 class="${css.signupTitle}">Регистрация</h1>
    <form novalidate class="${css.signupForm}">
      {{{emailInput}}}
      {{{loginInput}}}
      {{{firstNameInput}}}
      {{{lastNameInput}}}
      {{{phoneInput}}}
      {{{passwordInput}}}
      {{{passwordConfirmInput}}}
      <div class="${css.signupControls}">
        {{{signupButton}}}
        {{{linkSignin}}}
      </div>
      </form>
    </div>
  </div>
</div>`;
