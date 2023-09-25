import "./index.css";
import "./styles.scss";

import { Main, Signup } from "./pages";

const ROUTES: Record<string, string> = {
  "/sign-up": Signup(),
  "/": Main(),
};

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");

  if (root) {
    const component = ROUTES[window.location.pathname];
    root.innerHTML = component;
  }
});
