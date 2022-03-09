import { CreateLoadingCircle } from "../../util/CreateLoadingCircle";
import { loadTemplate } from "../../util/LoadTemplate";

export const skills = () => {
  const htmlString = require("./skills-static.html");
  const element = loadTemplate(htmlString);

  // const generateSkillsSection = () => {
  //   // const skills = element.querySelector(".skills");
  //   const circleItem1: HTMLElement = element.querySelector(".circle-1");
  //   const circleItem2: HTMLElement = element.querySelector(".circle-2");
  //   const circleItem3: HTMLElement = element.querySelector(".circle-3");

  //   const sectionTop: number = circleItem1.offsetTop;
  //   const sectionHeight: number = circleItem1.clientHeight;
  //   let render = false;

  //   console.log(sectionTop);
  //   console.log(sectionHeight);

  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset >= sectionTop - sectionHeight / 1.2 && !render) {
  //       const loaderInstance = new CreateLoadingCircle(90, 0.5, "blue", "1");
  //       const jsLoader = loaderInstance.create();
  //       circleItem1.appendChild(jsLoader);

  //       const loaderInstance2 = new CreateLoadingCircle(80, 1, "darkpink", "2");
  //       const jsLoader2 = loaderInstance2.create();
  //       circleItem2.appendChild(jsLoader2);

  //       const loaderInstance3 = new CreateLoadingCircle(70, 1.5, "yellow", "3");
  //       const jsLoader3 = loaderInstance3.create();
  //       circleItem3.appendChild(jsLoader3);
  //       render = true;
  //     }
  //   });
  // };

  // generateSkillsSection();

  return element;
};
