export const banner = () => {
  const htmlString = require("./banner-static.html");
  const element = document.createElement("div");
  element.innerHTML = htmlString.default;
  return element;
};
