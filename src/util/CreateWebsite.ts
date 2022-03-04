interface ICreateWebsite {
  run: () => void;
  addToDom: (component: Node) => void;
}

export class CreateWebsite implements ICreateWebsite {
  private components: object[];
  private nav: object;
  private foo: object;

  constructor(
    components: object[] | null = null,
    nav: object | null = null,
    footer: object | null = null
  ) {
    this.nav = nav;
    this.components = components;
    this.foo = footer;
  }

  run() {
    // add nav to dom
    this.nav && this.addToDom(this.nav as Node);

    // add components to nav
    this.components &&
      this.components.forEach((item) => {
        this.addToDom(item as Node);
      });

    // add footer to dom
    this.foo && this.addToDom(this.foo as Node);
  }

  addToDom(component: Node) {
    try {
      document.body.appendChild(component);
    } catch (e) {
      console.log(e);
    }
  }
}
