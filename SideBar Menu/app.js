const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidedbar-links a");

allLinks.forEach((element) => {
  element.addEventListener("click", function () {
    const hrefLinkClick = element.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

const mainItems = document.querySelectorAll(".main-item");

mainItems.forEach((mainItems) => {
  mainItems.addEventListener("click", () => {
    mainItems.classList.toggle("main-item--open");
  });
});
