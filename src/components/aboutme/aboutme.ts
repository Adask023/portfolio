export const aboutme = () => {
  const htmlString = require("./aboutme-static.html");
  const element = document.createElement("div");
  element.innerHTML = htmlString.default;
  return element;
};
