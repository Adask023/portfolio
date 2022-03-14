export const typingAnimation = () => {
  const textContainer: HTMLElement = document.querySelector(".text-animate");
  const text: string[] = [
    "UI designer",
    "programmist",
    "undefined  ;)",
    "web developer",
  ];

  let counter: number = 0;
  const max: number = text.length;
  setInterval(() => {
    textContainer.classList.remove("text-animate");

    textContainer.innerText = text[counter];

    textContainer.offsetWidth;
    textContainer.classList.add("text-animate");

    counter++;
    if (counter == max) {
      counter = 0;
    }
  }, 5000);
};
