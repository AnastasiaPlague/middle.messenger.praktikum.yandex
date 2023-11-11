import { Input } from "components";
import { InputProps } from "types";
import { Block, validate } from "utils";

export class Form extends Block {
  constructor(props: Partial<HTMLFormElement>) {
    super(props);
  }

  protected init() {
    this.children.fields = this.props.fields.map(
      (props: InputProps) => new Input(props),
    );

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
      (el) => el instanceof HTMLInputElement,
    ) as HTMLInputElement[];

    const formData = Object.fromEntries(new FormData(form));

    const validated = [];

    for (const element of formElements) {
      const { name, value } = element;

      if (Array.isArray(this.children.fields)) {
        const currentField = this.children.fields.find(
          (field: any) => field.props.name === name,
        );

        const errorMessage = validate(name, value);

        validated.push(Boolean(errorMessage));

        currentField?.setProps({
          errorMessage,
          value,
        });
      }
    }
    if (!validated.filter(Boolean).length) {
      this.props?.submitData?.(formData);
    }
  }

  render() {
    return this.compile(
      `<form  {{#if className}} class="{{className}}" {{/if}} {{#if id}} id="{{id}}" name="{{id}}" {{/if}} novalidate  >
      {{#each fields}}
        {{{this}}}
      {{/each}}
      </form>
    `,
      this.props,
    );
  }
}
