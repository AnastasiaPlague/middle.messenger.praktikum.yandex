import { Block, validate } from "utils";
import { InputProps } from "types";

import css from "./input.module.scss";

export class Input extends Block {
  constructor(props: InputProps) {
    super("div", props);
  }

  init() {
    if (this.props.className) {
      this.element!.classList.add(this.props.className);
    }
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
      `
      {{#if label}}<label class=${css.label} for="{{id}}">{{label}}</label>{{/if}}
      <input class=${css.input} type="{{type}}" name="{{name}}" id="{{id}}" placeholder="{{placeholder}}" {{#if value}} value="{{value}}" {{/if}} autocomplete="{{autocomplete}}"/>
      {{#if errorMessage}}<span class=${css.error}>{{errorMessage}}</span>{{/if}}
    `,
      this.props
    );
  }
}
