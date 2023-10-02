import Handlebars from "handlebars";
import { CHAT_MOCK_DATA } from "const";

import { tmpl } from "./chats.tmpl";

export const Chats = () => {
  return Handlebars.compile(tmpl)({
    data: CHAT_MOCK_DATA,
  });
};
