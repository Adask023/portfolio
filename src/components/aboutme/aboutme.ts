import { loadTemplate } from "../../util/loadTemplate";

export const aboutme = () => {
  const htmlString = require("./aboutme-static.html");
  const element = loadTemplate(htmlString);
  return element;
};
