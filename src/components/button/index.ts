import Handlebars from "handlebars";

import { tmpl } from "./button.tmpl";

type ButtonProps = Partial<HTMLButtonElement> & {
  text: string;
};

export const Button = (props: ButtonProps) => {
  return Handlebars.compile(tmpl)(props);
};
