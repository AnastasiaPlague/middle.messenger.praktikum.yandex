import Handlebars from "handlebars";
import { Link } from "components";

import { tmpl } from "./errorPage.tmpl";
import css from "./errorPage.module.scss";

type ErrorPageProps = {
  errorCode: string;
  text: string;
};

export const ErrorPage = (props: ErrorPageProps) => {
  return Handlebars.compile(tmpl)({
    ...props,
    linkBack: Link({
      text: "Назад к чатам",
      href: "/chats",
      className: css.linkBack,
    }),
  });
};
