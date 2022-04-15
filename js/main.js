const nav = document.querySelector("#menu");
var hide1 = document.getElementsByTagName("button");
var hide2 = document.getElementsByClassName("iconify");
var btnStatus = true; //hides button

document.getElementById("menu-icon").addEventListener("click", () => {
  nav.classList.toggle("show");
  btnStatus = !btnStatus;
  document.querySelector("body").classList.toggle("hidden");

  if (btnStatus == false) {
    for (let i = 0, max = hide1.length; i < max; i++) {
      btnStatus = !btnStatus;
      hide1[i].classList.toggle("none");
    }

    for (let i = 0, max = hide2.length; i < max; i++) {
      btnStatus = !btnStatus;
      hide2[i].classList.toggle("none");
    }
  } else {
    for (let i = 0, max = hide1.length; i < max; i++) {
      btnStatus = !btnStatus;
      hide1[i].classList.toggle("none");
    }

    for (let i = 0, max = hide2.length; i < max; i++) {
      btnStatus = !btnStatus;
      hide2[i].classList.toggle("none");
    }
  }
});
