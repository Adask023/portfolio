import { loadTemplate } from "../../util/loadTemplate";

export const navbar: any = () => {
  const htmlString = require("./navbar-static.html");

  const element = loadTemplate(htmlString);

  const button = element.querySelector(".toggle-nav");
  const mobileMenu = element.querySelector(".nav-list-mobile");

  button.addEventListener("click", () => {
    console.log("click");
    mobileMenu.classList.toggle("display-none");
  });

  return element;
};
