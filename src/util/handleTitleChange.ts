export const titleChange = () => {
  const navLi: NodeListOf<HTMLElement> =
    document.querySelectorAll(".nav-list li");

  const titlePrefix = "My page";
  document.title = titlePrefix;

  window.addEventListener("scroll", () => {
    navLi.forEach((link) => {
      if (
        link.classList.contains("active") &&
        document.title != `${titlePrefix} - ${link.textContent}`
      ) {
        document.title = `${titlePrefix} - ${link.textContent}`;
        console.log("yeee");
      }
    });
  });
};
