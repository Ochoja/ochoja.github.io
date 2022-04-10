var btnMenu = document.getElementsByClassName("btn-menu");
console.log(btnMenu);
var body = document.body;
for (var i = 0; i < btnMenu.length; i++) {
  btnMenu[i].addEventListener("click", () => {
    body.classList.toggle("menu-open");
    // console.log(btnMenu[i].classList);
  });
}
