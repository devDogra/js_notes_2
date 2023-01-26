const content = document.querySelector(".content");
const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal-btn");

openBtn.addEventListener("click", (e) => {
  modal.classList.add("show");
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", (e) => {
  modal.classList.remove("show");
  overlay.classList.remove("show");
});
overlay.addEventListener("click", (e) => {
  modal.classList.remove("show");
  overlay.classList.remove("show");
});
