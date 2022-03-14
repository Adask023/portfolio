export const animations = (selector: string) => {
  // img
  const imageAnim: HTMLElement = document.querySelector(`.${selector}`);
  const imageTop: number = imageAnim.offsetTop;
  const imageHeight: number = imageAnim.clientHeight;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= imageTop - imageHeight / 1.2) {
      imageAnim.classList.add("show");
    }
  });
};

