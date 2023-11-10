import { Block } from "utils";
import { withRouter } from "hocs/withRouter";

import css from "./link.module.scss";

type LinkProps = Partial<HTMLLinkElement> & {
  text: string;
};

export class BaseLink extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          event.preventDefault();
          this.navigate();
        },
      },
    });
  }
  navigate() {
    this.props.router.go(this.props.href);
  }

  render() {
    return this.compile(
      `
    <a class="${css.link} {{className}}">{{text}}</a>
    `,
      this.props,
    );
  }
}

export const Link = withRouter(BaseLink);
