export function handleNavActive(): void {
  // variables
  const sections: NodeListOf<HTMLElement> =
    document.querySelectorAll("section");
  const navLi: NodeListOf<HTMLElement> =
    document.querySelectorAll(".nav-list li");

  window.addEventListener("scroll", () => {
    let current: string = "";

    // check sections dimensions and offset
    sections.forEach((section) => {
      const sectionTop: number = section.offsetTop;
      const sectionHeight: number = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    // add/delete active class acording to current section
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });
}
