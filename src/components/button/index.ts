import { Block } from "utils";

import css from "./button.module.scss";

type ButtonProps = Partial<HTMLButtonElement> & {
  text: string;
  formId?: string;
  events?: Record<string, unknown>;
};

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(
      `
    <button class="${css.button} {{className}}" {{#if formId}} form="{{formId}}" {{/if}}>{{text}}</button>
    `,
      this.props,
    );
  }
}
