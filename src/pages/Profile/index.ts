import Handlebars from "handlebars";
import { Link } from "components";

import { tmpl } from "./profile.tmpl";
import css from "./profile.module.scss";

const userData = {
  avatar: "",
  email: "pochta@mail.ru",
  login: "crowdcontrol",
  first_name: "Иннокентий",
  last_name: "Константинопольский",
  display_name: "Кеша",
  phone: "+7 (906) 799 12 09",
};

export const Profile = () => {
  return Handlebars.compile(tmpl)({
    userData,
    linkChangeProfile: Link({
      text: "Изменить данные",
      href: "/change-profile",
      className: css.profileControlsLink,
    }),
    linkChangePassword: Link({
      text: "Изменить пароль",
      href: "/change-password",
      className: css.profileControlsLink,
    }),
    linkLogout: Link({
      text: "Выйти",
      href: "/",
      className: `${css.profileControlsLink} ${css.profileControlsDanger}`,
    }),
  });
};
