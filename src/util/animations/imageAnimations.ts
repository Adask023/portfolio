export const Animations = () => {

    // img
  const imageAnim: HTMLElement = document.querySelector(".image-section");
  const imageTop: number = imageAnim.offsetTop;
  const imageHeight: number = imageAnim.clientHeight;



  console.log(imageTop + imageHeight);
  window.addEventListener("scroll", () => {
    console.log(imageHeight);
    if (window.pageYOffset >= imageTop - imageHeight / 1.2) {
      imageAnim.classList.add("show");
    }
  });
};

// - imageHeight / 3
