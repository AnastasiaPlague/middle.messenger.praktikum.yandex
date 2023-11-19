import { expect } from "chai";
import Sinon from "sinon";
import { Button } from ".";

describe("Button", () => {
  it("Should be clickable", () => {
    const cb = Sinon.stub();

    const props = {
      text: "Кнопка",
      events: {
        click: cb,
      },
    };

    const button = new Button(props);

    button.element?.click();

    expect(cb.calledOnce).to.eq(true);
  });
});
