import { Block } from "utils";

type LinkProps = Partial<HTMLLinkElement> & {
  text: string;
};

export class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return this.compile(
      `
    <a href={{href}} {{#if className}} class="{{className}}" {{/if}}>{{text}}</a>
    `,
      this.props,
    );
  }
}
