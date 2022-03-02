export default (text = "TEST") => {
  const values: Array<number> = [1, 2];

  const sum: number = values[0] + values[1];

  const header = document.createElement("h1");
  header.className += "m-2 font-6";
  header.innerHTML = "Hello, my name is Adam";

  const paragraph = document.createElement("p");
  paragraph.className += "m-1 font-1";
  paragraph.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Aliquam sem et tortor consequat id. Orci a scelerisque purus semper eget duis at tellus at. Sociis natoque penatibus et magnis. Pellentesque id nibh tortor id aliquet lectus proin nibh. Ridiculus mus mauris vitae ultricies leo integer.";

  const element = document.createElement("div");
  element.innerHTML = `${text} + ${sum}`;
  element.className += "p-1 font-2";
  element.appendChild(header);
  element.appendChild(paragraph);
  return element;
};
