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

const ROUTES: Record<string, any> = {
  "/chats": new Chats(),
  "/sign-up": new Signup(),
  "/profile": new Profile(),
  "/change-profile": new ChangeProfile(),
  "/change-password": new ChangePassword(),
  "/404": new ErrorPage({
    errorCode: "404",
    text: "Не туда попали",
  }),
  "/500": new ErrorPage({
    errorCode: "500",
    text: "Мы уже фиксим",
  }),
  "/": new Main(),
};

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  const main = new Main();

  main.dispatchComponentDidMount();
  if (root) {
    const component = ROUTES[window.location.pathname] || ROUTES["/404"];
    root.append(component.getContent());
    component.dispatchComponentDidMount();
  }
});
