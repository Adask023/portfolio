import { CreateLoadingCircle } from "../CreateLoadingCircle";

export const generateSkillsSection = () => {
  // const skills = element.querySelector(".skills");
  const circleItem1: HTMLElement = document.querySelector(".circle-1");
  const circleItem2: HTMLElement = document.querySelector(".circle-2");
  const circleItem3: HTMLElement = document.querySelector(".circle-3");
  const circleItem4: HTMLElement = document.querySelector(".circle-4");
  const circleItem5: HTMLElement = document.querySelector(".circle-5");
  const circleItem6: HTMLElement = document.querySelector(".circle-6");

  const skillsSection: HTMLElement = document.querySelector("#skills");
  const sectionTop: number = skillsSection.offsetTop;
  const sectionHeight: number = skillsSection.clientHeight;
  let render = false;

  console.log(sectionHeight);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= sectionTop - 500 && !render) {
      const loaderInstance = new CreateLoadingCircle(90, 0, "blue", "1");
      const jsLoader = loaderInstance.create();
      circleItem1.appendChild(jsLoader);

      const loaderInstance2 = new CreateLoadingCircle(80, 0.4, "blue", "2");
      const jsLoader2 = loaderInstance2.create();
      circleItem2.appendChild(jsLoader2);

      const loaderInstance3 = new CreateLoadingCircle(60, 0.8, "yellow", "3");
      const jsLoader3 = loaderInstance3.create();
      circleItem3.appendChild(jsLoader3);

      const loaderInstance4 = new CreateLoadingCircle(80, 1.2, "yellow", "4");
      const jsLoader4 = loaderInstance4.create();
      circleItem4.appendChild(jsLoader4);

      const loaderInstance5 = new CreateLoadingCircle(90, 1.6, "darkblue", "5");
      const jsLoader5 = loaderInstance5.create();
      circleItem5.appendChild(jsLoader5);

      const loaderInstance6 = new CreateLoadingCircle(50, 2, "pink", "6");
      const jsLoader6 = loaderInstance6.create();
      circleItem6.appendChild(jsLoader6);

      render = true;
    }
  });
};
