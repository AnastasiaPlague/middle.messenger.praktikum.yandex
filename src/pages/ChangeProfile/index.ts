import Handlebars from "handlebars";
import { Button } from "components";
import { USER_MOCK_DATA } from "const";

import { tmpl } from "./changeProfile.tmpl";

export const ChangeProfile = () => {
  return Handlebars.compile(tmpl)({
    userData: USER_MOCK_DATA,
    buttonSave: Button({
      text: "Сохранить",
    }),
  });
};
