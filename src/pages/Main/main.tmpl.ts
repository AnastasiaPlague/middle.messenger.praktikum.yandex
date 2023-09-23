export const tmpl = `
<div class="main">
  <div class="main__container container">
    <div class="login-card">
    <form novalidate class="login-form">
      <h1 class="login-title">Авторизация</h1>
      {{{nameInput}}}
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
