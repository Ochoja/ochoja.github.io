const menuBtn = document.querySelector(".icon");
const navBar = document.querySelector(".nav-items");
const hidelogo = document.querySelector(".logo");
menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("responsive");
  hidelogo.classList.toggle("show");
});
