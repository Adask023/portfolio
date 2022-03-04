import { loadTemplate } from "../../util/LoadTemplate";

export const aboutme = () => {
  const htmlString = require("./aboutme-static.html");
  const element = loadTemplate(htmlString);


  return element;
};
