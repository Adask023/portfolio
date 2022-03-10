import { loadTemplate } from "../../util/LoadTemplate";

export const parallax1 = () => {
  const htmlString = require("./parallax-section-1-static.html");
  const element = loadTemplate(htmlString);
  return element;
};
