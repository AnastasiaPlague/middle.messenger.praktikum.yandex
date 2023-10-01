import css from "./errorPage.module.scss";

export const tmpl = `
<div class="fullscreen-centered">
  <div class="${css.container} container">
   <h1 class=${css.title}>{{errorCode}}</h1>
   <p>{{text}}</p>
   {{{linkBack}}}  
  </div>
</div>
`;
