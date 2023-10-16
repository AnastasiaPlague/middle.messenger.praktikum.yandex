import { Block } from "utils";
import { Link } from "components";

import css from "./errorPage.module.scss";

type ErrorPageProps = {
  errorCode: string;
  text: string;
};

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super("div", props);
  }

  init() {
    this.element!.classList.add("fullscreen-centered");
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
      <div class="${css.container} container">
        <h1 class=${css.title}>{{errorCode}}</h1>
        <p>{{text}}</p>
        {{{linkBack}}}  
      </div>
    `,
      this.props
    );
  }
}
