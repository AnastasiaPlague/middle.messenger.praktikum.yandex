import css from "./main.module.scss";

export const tmpl = `
<div class="fullscreen-centered">
  <div class="${css.container} container">
    <div class="card ${css.loginCard}">
    <form novalidate class=${css.loginForm}>
      <h1 class=${css.loginTitle}>Авторизация</h1>
      {{{loginInput}}}
      {{{passwordInput}}}
      <div class=${css.loginControls}>
        {{{loginButton}}}
        {{{linkAuth}}}
      </div>
      </form>
    </div>
  </div>
</div>
`;
