import Handlebars from "handlebars";
import { Button } from "components";
import { USER_MOCK_DATA } from "const"; 

import { tmpl } from "./changePassword.tmpl";

export const ChangePassword = () => {
  return Handlebars.compile(tmpl)({
    userData: USER_MOCK_DATA,
    buttonSave: Button({
      text: "Сохранить",
    }),
  });
};
