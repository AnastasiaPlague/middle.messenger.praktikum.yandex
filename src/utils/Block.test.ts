import { expect } from "chai";
import { Block } from ".";

describe("Block", () => {
  class MockBlock extends Block {
    constructor(props: { text?: string }) {
      super(props);
    }

    render() {
      return this.compile(
        `
    <button>{{text}}</button>
    `,
        this.props,
      );
    }
  }

  it("Block should mount component", () => {
    const component = new MockBlock({});

    expect(component.getContent()).to.be.instanceOf(window.HTMLButtonElement);
  });

  it("Block should accept props at init", () => {
    const textProp = "test";
    const component = new MockBlock({ text: textProp });

    expect(component.props.text).to.equal(textProp);
  });

  it("Block should update props", () => {
    const originalProp = { text: "test" };
    const component = new MockBlock(originalProp);
    const newProp = { text: "test2" };

    component.setProps(newProp);

    expect(component.props).to.eql(newProp);
  });
});
