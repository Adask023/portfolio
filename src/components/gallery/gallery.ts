import { loadTemplate } from "../../util/LoadTemplate";

export const gallery = () => {
  const htmlString = require("./gallery-static.html");
  const element = loadTemplate(htmlString);
  return element;
};
