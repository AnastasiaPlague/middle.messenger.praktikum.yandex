import Router from "utils/Router";
import {
  ChangeProfile,
  Chats,
  Main,
  Profile,
  Signup,
  ChangePassword,
  Error404Page,
  Error500Page,
} from "./pages";
import AuthController from "controllers";
import { Routes } from "const";
import Handlebars, { HelperOptions } from "handlebars";

import "./index.scss";
import "./styles.scss";

Handlebars.registerHelper(
  "compare",
  (lvalue, rvalue, options: HelperOptions) => {
    const operator = options.hash.operator || "===";

    const operators: Record<string, (l: string, r: string) => boolean> = {
      "===": function (l, r) {
        return l === r;
      },

      "!==": function (l, r) {
        return l !== r;
      },
    };

    if (!operators[operator]) {
      throw new Error(
        "Handlerbars Helper 'compare' doesn't know the operator " + operator,
      );
    }

    const result = operators[operator](lvalue, rvalue);

    if (result) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },
);
Handlebars.registerHelper("formatHH:MM", (value) => {
  const date = new Date(value);
  return new Intl.DateTimeFormat("ru-RU", {
    timeStyle: "short",
  }).format(date);
});

Handlebars.registerHelper("formatDD:HH:MM", (value) => {
  const date = new Date(value);
  return new Intl.DateTimeFormat("ru-RU", {
    timeStyle: "short",
    dateStyle: "short",
  }).format(date);
});

window.addEventListener("DOMContentLoaded", async () => {
  Router.use(Routes.Index, Main)
    .use(Routes.Register, Signup)
    .use(Routes.Profile, Profile)
    .use(Routes.Chats, Chats)
    .use(Routes.ChangePassword, ChangePassword)
    .use(Routes.ChangeProfile, ChangeProfile)
    .use(Routes.Error404, Error404Page)
    .use(Routes.Error500, Error500Page);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Chats);
    }
  } catch (e) {
    console.log(e);
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
