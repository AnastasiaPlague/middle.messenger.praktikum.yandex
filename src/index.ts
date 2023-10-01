import "./index.css";
import "./styles.scss";

import {
  ChangeProfile,
  Chats,
  ErrorPage,
  Main,
  Profile,
  Signup,
  ChangePassword,
} from "./pages";

const ROUTES: Record<string, string> = {
  "/chats": Chats(),
  "/sign-up": Signup(),
  "/profile": Profile(),
  "/change-profile": ChangeProfile(),
  "/change-password": ChangePassword(),
  "/404": ErrorPage({
    errorCode: "404",
    text: "Не туда попали",
  }),
  "/500": ErrorPage({
    errorCode: "500",
    text: "Мы уже фиксим",
  }),
  "/": Main(),
};

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");

  if (root) {
    const component = ROUTES[window.location.pathname] || ROUTES["/404"];
    root.innerHTML = component;
  }
});
