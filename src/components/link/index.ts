import { Block } from "utils";

type LinkProps = Partial<HTMLLinkElement> & {
  text: string;
};

export class Link extends Block {
  constructor(props: LinkProps) {
    super("a", props);
  }

  protected init() {
    if (this.props.className) {
      this.element!.classList.add(this.props.className);
    }
    this.element!.setAttribute("href", this.props.href);
  }

  render() {
    return this.compile(`{{text}}`, this.props);
  }
}
