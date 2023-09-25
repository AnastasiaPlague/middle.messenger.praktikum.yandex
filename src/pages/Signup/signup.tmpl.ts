export const tmpl = `
<div class="signup fullscreen-centered">
  <div class="signup__container container">
    <div class="card">
    <h1 class="signup-title">Регистрация</h1>
    <form novalidate class="signup-form">
      {{{emailInput}}}
      {{{loginInput}}}
      {{{firstNameInput}}}
      {{{lastNameInput}}}
      {{{phoneInput}}}
      {{{passwordInput}}}
      {{{passwordConfirmInput}}}
      <div class="signup-controls">
        {{{signupButton}}}
        {{{linkSignin}}}
      </div>
      </form>
    </div>
  </div>
</div>`;
