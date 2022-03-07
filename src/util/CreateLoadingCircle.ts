interface ICreateLoadingCircle {
  create: () => Node;
}

export class CreateLoadingCircle implements ICreateLoadingCircle {
  private level: number;
  private delay: number;

  constructor(level = 10, delay = 0.2) {
    this.level = level;
    this.delay = delay;
  }

  create() {
    console.log(this.level);
    console.log(this.delay);

    const element = document.createElement("div");
    const h1 = document.createElement("h1");
    
    h1.innerHTML = "hello from loader!";
    element.appendChild(h1);
    return element;
  }
}
