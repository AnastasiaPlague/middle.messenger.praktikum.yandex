import Handlebars from "handlebars";

import { tmpl } from "./link.tmpl";

type LinkProps = Partial<HTMLLinkElement> & {
  text: string;
};

export const Link = (props: LinkProps) => {
  return Handlebars.compile(tmpl)(props);
};
