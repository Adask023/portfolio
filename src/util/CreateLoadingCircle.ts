interface ICreateLoadingCircle {
  constructor: Function;
  create: () => Node;
  createSvg: () => Node;
  pickVariant: () => string;
}

type color = "blue" | "pink" | "yellow" | "darkblue" | "darkpink";

export class CreateLoadingCircle implements ICreateLoadingCircle {
  private level: number;
  private delay: number;
  private variant: string;
  private id: string;

  constructor(
    level: number = 50,
    delay: number = 0.2,
    variant: color = "blue",
    id: string = "0"
  ) {
    this.level = level;
    this.delay = delay;
    this.variant = variant;
    this.id = id;
  }

  pickVariant() {
    switch (this.variant) {
      case "blue":
        return "#aef1ff";
      case "pink":
        return "#e8a3ec";
      case "yellow":
        return "#ffd79c";
      case "darkblue":
        return "#3e3de6";
      case "darkpink":
        return "#e7618b";
      default:
        return "#aef1ff";
    }
  }

  createSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", "160px");
    svg.setAttribute("width", "160px");

    const svgUrl = "http://www.w3.org/2000/svg";
    const svgCircle = document.createElementNS(svgUrl, "circle");
    svgCircle.setAttribute("cx", "80");
    svgCircle.setAttribute("cy", "80");
    svgCircle.setAttribute("r", "70");
    svgCircle.setAttribute("stroke-linecap", "round");
    svgCircle.setAttribute(
      "style",
      `fill: none;
    stroke: ${this.pickVariant()};
    stroke-width: 20px;
    stroke-dasharray: 472;
    stroke-dashoffset: 472;
    animation: circleanim${this.id} 2s ease forwards;
    `
    );

    let dynamicStyles = null;
    dynamicStyles = document.createElement("style");
    document.head.appendChild(dynamicStyles);
    dynamicStyles.sheet.insertRule(
      `@keyframes circleanim${this.id} {
      100% {
        stroke-dashoffset: ${472 - 472 * (this.level / 100) + 20};
      }
    }`
    );

    svg.appendChild(svgCircle);

    return svg;
  }

  create() {
    const element = document.createElement("div");
    element.classList.add("skill");

    const outer = document.createElement("div");
    outer.classList.add("outer");

    const inner = document.createElement("div");
    inner.classList.add("inner");

    const circleNumber = document.createElement("div");
    circleNumber.classList.add("circle-number");

    let counter = 0;
    circleNumber.innerHTML = counter + "%";

    inner.appendChild(circleNumber);
    outer.appendChild(inner);
    element.appendChild(outer);
    const nevSvg = this.createSvg();

    setTimeout(() => {
      element.appendChild(nevSvg);
      setInterval(() => {
        if (counter == this.level) {
          clearInterval();
        } else {
          counter += 1;
          circleNumber.innerHTML = counter + "%";
        }
      }, 1000 * (2 / this.level));
    }, this.delay * 1000);

    return element;
  }
}
