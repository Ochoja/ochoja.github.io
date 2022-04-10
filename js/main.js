const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
  menuItems.classList.toggle("open");
});
