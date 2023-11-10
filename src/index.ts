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

import "./index.scss";
import "./styles.scss";

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
      Router.go(Routes.Profile);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
