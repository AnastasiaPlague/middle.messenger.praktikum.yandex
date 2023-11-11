import { Block, validate } from "utils";
import { InputProps } from "types";

import css from "./input.module.scss";

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  init() {
    this.setProps({
      events: {
        focusout: (e: Event & { target: HTMLInputElement }) =>
          this.handleBlur(e),
      },
    });
  }

  handleBlur(e: Event & { target: HTMLInputElement }) {
    if (!e.target.name || this.props.optional) {
      return;
    }
    const { name, value } = e.target;

    const errorMessage = validate(name, value);

    this.setProps({
      errorMessage,
      value,
    });
  }

  render() {
    return this.compile(
      `<div {{#if className}} class="{{className}}" {{/if}} >
      {{#if label}}<label class=${css.label} for="{{id}}">{{label}}</label>{{/if}}
      <input class=${css.input} type="{{type}}" name="{{name}}" id="{{id}}" placeholder="{{placeholder}}" {{#if value}} value="{{value}}" {{/if}} autocomplete="{{autocomplete}}" {{#if maxLength}} maxlength="{{maxLength}}" {{/if}}/>
      {{#if errorMessage}}<span class=${css.error}>{{errorMessage}}</span>{{/if}}
      </div>
    `,
      this.props,
    );
  }
}
