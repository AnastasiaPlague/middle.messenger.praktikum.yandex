import { Block } from "utils";
import { Link } from "components";

import css from "./error.module.scss";

type ErrorProps = {
  errorCode: string;
  text: string;
};

export class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }

  init() {
    this.children = {
      linkBack: new Link({
        text: "Назад к чатам",
        href: "/chats",
        className: css.linkBack,
      }),
    };
  }

  render() {
    return this.compile(
      `
      <div class="fullscreen-centered">
        <div class="${css.container} container">
          <h1 class=${css.title}>{{errorCode}}</h1>
          <p>{{text}}</p>
          {{{linkBack}}}  
        </div>
      </div>
    `,
      this.props,
    );
  }
}
