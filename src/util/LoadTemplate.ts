export const loadTemplate = (staticModule: { default: string }) => {
  const element = document.createElement("div");
  element.innerHTML = staticModule.default;
  return element;
};
