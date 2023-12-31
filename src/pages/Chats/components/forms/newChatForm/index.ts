import { Block } from "utils";
import { Button, Form } from "components";
import { NewChat } from "api/ChatsApi";
import ChatsController from "controllers/ChatsController";

import css from "../forms.module.scss";

export class NewChatForm extends Block {
  init() {
    this.children = {
      form: new Form({
        className: css.formFields,
        id: "new-chat",
        submitData: (data: NewChat) => this.handleSubmit(data),
        fields: [
          {
            label: "Название чата",
            placeholder: "Введите название чата",
            name: "title",
            id: "title",
            maxLength: 20,
          },
        ],
      }),
      submitChatBtn: new Button({
        text: "Сохранить",
        className: css.formButton,
        formId: "new-chat",
      }),
    };
  }

  async handleSubmit(data: NewChat) {
    try {
      await ChatsController.addChat(data);
      const input = document.getElementById("title") as HTMLInputElement;
      input.value = "";
      this.props.closePopup();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return this.compile(
      `
      <div class="${css.formContainer} card container">
        <h2 class=${css.formTitle}>Добавление чата</h2>
          {{{form}}}
          {{{submitChatBtn}}}
      </div>
    `,
      this.props,
    );
  }
}
