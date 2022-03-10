interface IParallax {
  run: () => void;
}

export class Parallax implements IParallax {
  private selector: string | null;
  private strength: number;

  constructor(selector: string | null = null, strength: number = 0.7) {
    this.selector = selector;
    this.strength = strength;
  }

  run() {
    const parallax: HTMLElement = document.querySelector(`${this.selector}`);
    console.log(parallax);
    const sectionTop = parallax.offsetTop;
    const sectionHeight = parallax.offsetHeight;

    console.log(sectionTop);
    console.log(window.pageYOffset);

    // const s = this.strength;
    const s = this.strength;

    window.addEventListener("scroll", () => {
      if (window.innerWidth > 1000) {
        let offset: number = window.pageYOffset - (sectionTop + sectionHeight);
        parallax.style.backgroundPositionY = offset * s + "px";
        console.log(offset);
      } else {
        parallax.style.backgroundPositionY = 0 + "px"
      }
    });
  }
}
