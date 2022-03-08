import { CreateLoadingCircle } from "../../util/CreateLoadingCircle";
import { loadTemplate } from "../../util/LoadTemplate";

export const skills = () => {
  const htmlString = require("./skills-static.html");
  const element = loadTemplate(htmlString);

  const generateSkillsSection = () => {
    // const skills = element.querySelector(".skills");
    const circleItem1 = element.querySelector(".circle-1");
    const circleItem1Header = element.querySelector(".circle-1-header") as HTMLElement;
    const circleItem2 = element.querySelector(".circle-2");
    const circleItem2Header = element.querySelector(".circle-2-header");
    const circleItem3 = element.querySelector(".circle-3");
    const circleItem3Header = element.querySelector(".circle-3-header");

    setTimeout(() => {
      const loaderInstance = new CreateLoadingCircle(90, 0.2, "blue", "1");
      const jsLoader = loaderInstance.create();
      circleItem1.appendChild(jsLoader);
    }, 1000);

    setTimeout(() => {
      const loaderInstance2 = new CreateLoadingCircle(80, 0.2, "darkpink", "2");
      const jsLoader2 = loaderInstance2.create();
      circleItem2.appendChild(jsLoader2);
    }, 1500);

    setTimeout(() => {
      const loaderInstance3 = new CreateLoadingCircle(70, 0.2, "yellow", "3");
      const jsLoader3 = loaderInstance3.create();
      circleItem3.appendChild(jsLoader3);
    }, 2000);
  };

  generateSkillsSection();

  return element;
};
