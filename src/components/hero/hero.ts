export const hero = () => {
  const htmlString = require("./hero-static.html");
  const element = document.createElement("div");
  element.innerHTML = htmlString.default;

  return element;
};
