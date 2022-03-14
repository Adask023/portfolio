import { CreateLoadingCircle } from "../../util/CreateLoadingCircle";
import { loadTemplate } from "../../util/loadTemplate";

export const skills = () => {
  const htmlString = require("./skills-static.html");
  const element = loadTemplate(htmlString);

  return element;
};
