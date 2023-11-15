import { Block } from "utils";
import { Error } from "components";

export class Error404Page extends Block {
  init() {
    this.children.error = new Error({
      errorCode: "404",
      text: "Не туда попали",
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
