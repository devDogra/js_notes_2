const quizForm = document.querySelector(".quiz");
const questions = document.querySelectorAll(".question");
const modal = document.querySelector(".congrats-modal");
const overlay = document.querySelector(".overlay");

function getPickedAns(question) {
  const options = Array.from(question.querySelectorAll('input[type="radio"'));
  const pickedAns = options.filter((option) => option.checked)[0].value;
  return pickedAns;
}
function resetQuiz() {
  quizForm.reset();
}

function showCongrats() {
  overlay.classList.add("show");
  modal.classList.add("show");
}
function hideCongrats() {
  overlay.classList.remove("show");
  modal.classList.remove("show");
}

overlay.addEventListener("click", hideCongrats);

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let corrects = 0;
  questions.forEach((q) => {
    const correctAns = q.dataset.answer;
    const pickedAns = getPickedAns(q);

    q.dataset.status = correctAns === pickedAns ? "correct" : "wrong";
    if (q.dataset.status == "correct") corrects++;
  });

  if (corrects === questions.length) {
    showCongrats();
  }
  resetQuiz();
});
