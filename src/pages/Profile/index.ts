import Handlebars from "handlebars";
import { Link } from "components";
import { USER_MOCK_DATA } from "const";

import { tmpl } from "./profile.tmpl";
import css from "./profile.module.scss";

export const Profile = () => {
  return Handlebars.compile(tmpl)({
    userData: USER_MOCK_DATA,
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
