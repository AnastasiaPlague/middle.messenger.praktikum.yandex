import { Input } from "components";
import { InputProps } from "types";
import { Block, validate } from "utils";

export class Form extends Block {
  constructor(props: Partial<HTMLFormElement>) {
    super("form", props);
  }

  protected init() {
    this.children.fields = this.props.fields.map(
      (props: InputProps) => new Input(props)
    );

    if (this.props.className) {
      this.element!.classList.add(this.props.className);
    }
    this.element!.setAttribute("id", this.props.id ?? "");
    this.element!.setAttribute("novalidate", "");
    this.element!.setAttribute("name", this.props.id ?? "");
    this.setProps({
      events: {
        submit: (e: Event & { target: HTMLFormElement }) =>
          this.handleSubmit(e),
      },
    });
  }

  handleSubmit(e: Event & { target: HTMLFormElement }) {
    e.preventDefault();

    const form = e.target;
    const formElements = [...form.elements].filter(
      (el) => el instanceof HTMLInputElement
    ) as HTMLInputElement[];

    const formData = Object.fromEntries(new FormData(form));
    console.log(form.name, formData);

    for (let element of formElements) {
      const { name, value } = element;

      if (Array.isArray(this.children.fields)) {
        const currentField = this.children.fields.find(
          (field: any) => field.props.name === name
        );

        let errorMessage;
        if (name === "confirm_password") {
          const passwordField = form!.password;
          errorMessage = validate(name, passwordField?.value ?? "", value);
        } else {
          errorMessage = validate(name, value);
        }

        currentField?.setProps({
          errorMessage,
          value,
        });
      }
    }
  }

  render() {
    return this.compile(
      `
      {{#each fields}}
        {{{this}}}
      {{/each}}
    `,
      this.props
    );
  }
}
