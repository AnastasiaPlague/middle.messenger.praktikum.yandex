import "./index.css";
import "./styles.scss";

import { Chats, Main, Profile, Signup } from "./pages";

const ROUTES: Record<string, string> = {
  "/chats": Chats(),
  "/sign-up": Signup(),
  "/profile": Profile(),
  "/": Main(),
};

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");

  if (root) {
    const component = ROUTES[window.location.pathname];
    root.innerHTML = component;
  }
});
