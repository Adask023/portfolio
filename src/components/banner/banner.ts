import { loadTemplate } from "../../util/loadTemplate";

export const banner = () => {
  const htmlString = require("./banner-static.html");
  const element = loadTemplate(htmlString);
  return element;
};
