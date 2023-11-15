import { Block } from "utils";
import { Error } from "components";

export class Error500Page extends Block {
  init() {
    this.children.error = new Error({
      errorCode: "500",
      text: "Мы уже фиксим",
    });
  }

  render() {
    return this.compile(
      `
      {{{error}}}
    `,
      this.props,
    );
  }
}
