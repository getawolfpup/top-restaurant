import "./style.css";
import homepage from "./home.js";
import menuPage from "./menu.js";
import pageLoader from "./loader.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  const nav = document.querySelector(".navigation");
  nav.addEventListener("click", handleNav);
  pageLoader(homepage());
}

function handleNav(e) {
  const target = e.target.closest("button");
  if (!target) {
    return;
  }

  if (target.classList.contains("menu")) {
    pageLoader(menuPage());
  }

  if (target.classList.contains("home")) {
    pageLoader(homepage());
  }
}
