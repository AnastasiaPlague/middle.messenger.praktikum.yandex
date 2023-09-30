import Handlebars from "handlebars";

import { tmpl } from "./chats.tmpl";

const data = [
  {
    user: {
      name: "Michael Scott",
      avatar: "",
    },
    message: {
      content: "I am running away from my responsibilities and it feels good.",
      timestamp: "12:01",
    },
    unreadMessages: 100,
  },
  {
    user: {
      name: "Dwight Shrute",
      avatar: "",
    },
    message: {
      content:
        "Whenever I'm about to do something, I think, 'Would an idiot do that?' and if they would, I do not do that thing.",
      timestamp: "18:23",
    },
    unreadMessages: 0,
  },
  {
    user: {
      name: "Stanley Hudson",
      avatar: "",
    },
    message: {
      content: "If I don't have some cake soon, I might die.",
      timestamp: "10:38",
    },
    unreadMessages: 1,
  },
];

export const Chats = () => {
  return Handlebars.compile(tmpl)({
    data,
  });
};
