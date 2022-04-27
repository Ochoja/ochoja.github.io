const mission_btn = document.querySelectorAll(".mission_btn");
const mission_text = document.querySelectorAll(".mission_text");
console.log(mission_text);

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
