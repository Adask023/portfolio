import { loadTemplate } from "../../util/LoadTemplate";

export const banner = () => {
  const htmlString = require("./banner-static.html");
  const element = loadTemplate(htmlString);
  return element;
};
