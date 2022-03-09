import { loadTemplate } from "../../util/LoadTemplate";

export const hero = () => {
  const htmlString = require("./hero-static.html");
  const element = loadTemplate(htmlString);
  return element;
};

// const sectionTop: number = section.offsetTop;
// const sectionHeight: number = section.clientHeight;
// if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
//   current = section.getAttribute("id");
// }
