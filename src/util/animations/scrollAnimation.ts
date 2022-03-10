export const scrollAnimation = () => {
  const svg: HTMLElement = document.querySelector(".scroll-animation svg");
  const svgContainer: HTMLElement = document.querySelector(".scroll-animation");

  window.addEventListener("scroll", () => {
    let scrolled = window.pageYOffset;
    let rate = scrolled * 0.5;

    if (scrolled > 400) {
      svgContainer.classList.add("show");
    } else {
      svgContainer.classList.remove("show");
    }

    svg.style.transform = `rotate(${rate}deg)`;
  });
};
