export const typingAnimation = () => {
  const textContainer: HTMLElement = document.querySelector(".text-animate");
  const text: string[] = [
    " UI designer",
    "    programmist",
    "undefined  ;)",
    "web developer",
  ];

  //   14, 11, 12, 13

  let counter: number = 0;
  const max: number = text.length;
  setInterval(() => {
    textContainer.classList.remove("text-animate");
    // textContainer.removeAttribute("class");

    textContainer.innerText = text[counter];

    textContainer.offsetWidth;
    // textContainer.classList.add(`text-animation${text[counter].length}`);
    // console.log(`text-animation${text[counter].length}`)
    // textContainer.classList.add("bar-acc-pink");
    textContainer.classList.add("text-animate");

    counter++;
    if (counter == max) {
      counter = 0;
    }
  }, 5000);
};
