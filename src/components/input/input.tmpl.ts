import css from "./input.module.scss";

export const tmpl = `
<div {{#if className}} class={{className}} {{/if}}>
  <label class=${css.label} for="{{id}}">{{label}}</label>
  <input class=${css.input} type="{{type}}" name="{{name}}" id="{{id}}" placeholder="{{placeholder}}" autocomplete="{{autocomplete}}"/>
</div>
`;
