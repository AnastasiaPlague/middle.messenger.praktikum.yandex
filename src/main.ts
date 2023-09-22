import "./index.css";
import "./styles.scss";

import { Main } from "./pages/Main";

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");

  if (root) {
    root.innerHTML = Main();
  }
});
