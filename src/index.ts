import "./index.css";
import "./styles.scss";

import { ChangeProfile, Chats, Main, Profile, Signup } from "./pages";
import { ChangePassword } from "pages/ChangePassword";

const ROUTES: Record<string, string> = {
  "/chats": Chats(),
  "/sign-up": Signup(),
  "/profile": Profile(),
  "/change-profile": ChangeProfile(),
  "/change-password": ChangePassword(),
  "/": Main(),
};

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");

  if (root) {
    const component = ROUTES[window.location.pathname];
    root.innerHTML = component;
  }
});
