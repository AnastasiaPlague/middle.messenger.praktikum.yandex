import { Block } from "utils";

import css from "./button.module.scss";

type ButtonProps = Partial<HTMLButtonElement> & {
  text: string;
  formId?: string;
};

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super("button", props);
  }

  protected init() {
    this.element!.classList.add(css.button);
    if (this.props?.formId) {
      this.element!.setAttribute("form", this.props.formId);
    }
  }

  render() {
    return this.compile("{{text}}", this.props);
  }
}
