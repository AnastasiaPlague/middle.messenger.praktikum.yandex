import Handlebars from "handlebars";

import { tmpl } from "./input.tmpl";

type InputProps = Partial<HTMLInputElement> & {
  label: string;
};

export const Input = (props: InputProps) => {
  return Handlebars.compile(tmpl)(props);
};
