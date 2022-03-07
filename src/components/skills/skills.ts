import { CreateLoadingCircle } from "../../util/CreateLoadingCircle";
import { loadTemplate } from "../../util/LoadTemplate";

export const skills = () => {
  const htmlString = require("./skills-static.html");
  const element = loadTemplate(htmlString);

  const skills = element.querySelector(".skills");

  const loaderInstance = new CreateLoadingCircle();
  const jsLoader = loaderInstance.create();

  skills.appendChild(jsLoader);

  return element;
};
