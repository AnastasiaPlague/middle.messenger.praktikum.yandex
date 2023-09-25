export const tmpl = `
<div class="main fullscreen-centered">
  <div class="main__container container">
    <div class="card login-card">
    <form novalidate class="login-form">
      <h1 class="login-title">Авторизация</h1>
      {{{loginInput}}}
      {{{passwordInput}}}
      <div class="login-controls">
        {{{loginButton}}}
        {{{linkAuth}}}
      </div>
      </form>
    </div>
  </div>
</div>
`;
