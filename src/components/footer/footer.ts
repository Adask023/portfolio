import { loadTemplate } from "../../util/LoadTemplate";

export const footer = () => {
  const htmlString = require("./footer-static.html");
  const element = loadTemplate(htmlString);
  return element;
};
