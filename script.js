const questionBox = document.querySelectorAll(".questionBox");
const everyQuestion = document.querySelectorAll(".question");
const everyAnswer = document.querySelectorAll(".answer");
const everyArrow = document.querySelectorAll(".arrow");

questionBox.forEach((question) => {
  question.addEventListener("click", () => {
    for (let i = 0; i < questionBox.length; i++) {
      if (questionBox[i] !== question) {
        questionBox[i].classList.remove("active");
      }
    }
    question.classList.toggle("active");
  });
});
