import { loadTemplate } from "../../util/LoadTemplate";

export const hero = () => {
  const htmlString = require("./hero-static.html");
  const element = loadTemplate(htmlString);
  return element;
};

