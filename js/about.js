const mission_btn = document.querySelectorAll(".mission_btn");
const mission_text = document.querySelectorAll(".mission_text");
const card = document.querySelectorAll(".card"); //contact cards
const popup = document.querySelector(".popup"); //popup_container
const popup_modal = document.querySelectorAll(".popup_modal"); //popup_modal
const close_popup = document.querySelectorAll(".close_popup");

for (let i = 0; i < mission_btn.length; i++) {
  mission_btn[i].addEventListener("click", () => {
    for (let i = 0; i < mission_btn.length; i++) {
      //remove active class from all buttons
      mission_btn[i].classList.remove("active");
      mission_text[i].classList.remove("show");
    }
    mission_btn[i].classList.add("active"); //add active class to clicked button
    mission_text[i].classList.add("show");
  });
}

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => {
    popup.classList.add("show");
    popup_modal[i].classList.add("show");
  });
}

for (let i = 0; i < close_popup.length; i++) {
  close_popup[i].addEventListener("click", () => {
    popup.classList.remove("show");

    for (let i = 0; i < popup_modal.length; i++) {
      popup_modal[i].classList.remove("show");
    }
  });
}
