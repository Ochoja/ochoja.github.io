const nav = document.querySelector("#menu");
var hide1 = document.getElementsByTagName("button");
var btnStatus = true; //hides button

document.getElementById("menu-icon").addEventListener("click", () => {
  nav.classList.toggle("show");
  btnStatus = !btnStatus;

  if (btnStatus == false) {
    for (let i = 0, max = hide1.length; i < max; i++) {
      btnStatus = !btnStatus;
      hide1[i].classList.toggle("none");
    }
  } else {
    for (let i = 0, max = hide1.length; i < max; i++) {
      btnStatus = !btnStatus;
      hide1[i].classList.toggle("none");
    }
  }
});
