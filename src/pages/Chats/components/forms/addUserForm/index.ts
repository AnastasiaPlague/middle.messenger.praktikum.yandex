import { Block } from "utils";
import { Button, Form } from "components";
import ChatsController from "controllers/ChatsController";
import { State, withStore } from "utils/Store";

import css from "../forms.module.scss";

export class BaseAddUserForm extends Block {
  init() {
    this.children = {
      form: new Form({
        className: css.formFields,
        id: "add-user",
        submitData: (data: { login: string }) => this.handleSubmit(data),
        fields: [
          {
            label: "Логин",
            placeholder: "Введите ник пользователя",
            name: "login",
            id: "login",
            maxLength: 20,
          },
        ],
      }),
      submitChatBtn: new Button({
        text: "Добавить",
        className: css.formButton,
        formId: "add-user",
      }),
    };
  }

  async handleSubmit(data: { login: string }) {
    try {
      await ChatsController.addUserToChat({
        ...data,
        chatId: this.props.activeChat,
      });
      const input = document.getElementById("login") as HTMLInputElement;
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
        <h2 class=${css.formTitle}>Добавить пользователя</h2>
          {{{form}}}
          {{{submitChatBtn}}}
      </div>
    `,
      this.props,
    );
  }
}

function mapStateToProps(state: State) {
  return { activeChat: state.activeChat ?? null };
}
export const AddUserForm = withStore(mapStateToProps)(BaseAddUserForm);
