import { loadTemplate } from "../../util/LoadTemplate";

export const form = () => {
  const htmlString = require("./form-static.html");
  const element = loadTemplate(htmlString);
  return element;
};
