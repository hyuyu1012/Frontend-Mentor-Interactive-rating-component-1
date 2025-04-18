const buttons = document.querySelectorAll(".rating");
const submitBtn = document.getElementById("submit-button");
const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thanks-card");
const output = document.getElementById("output");
let score = '0';

buttons.forEach(button => {
  button.addEventListener("click", function () 
  {
    buttons.forEach(btn => btn.classList.remove("clicked"));
    this.classList.add("clicked");
    score = this.textContent;
  });
});

buttons.forEach(button => {
  button.addEventListener("mouseover", function () {
    this.classList.add("hover");
  });
  button.addEventListener("mouseout", function () {
    this.classList.remove("hover");
  });
});

submitBtn.addEventListener("mouseover", function () {
  this.classList.add("submit-hover");
});

submitBtn.addEventListener("mouseout", function () {
  this.classList.remove("submit-hover");
})

submitBtn.addEventListener("click", function () {
  this.classList.add("clicked");
  ratingCard.style.display = "none";
  thanksCard.style.display = "flex";
  output.textContent = score;
});


