export default (text = "Hello, Webpack!") => {
  const values: Array<number> = [1, 2];

  const sum: number = values[0] + values[1];

  const element = document.createElement("h1");
  element.innerHTML = `${text} + ${sum}`;

  return element;
};
