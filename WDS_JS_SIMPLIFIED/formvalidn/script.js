// Username > 6
// Pwd > 10
// Pwd match
// Agree chcecked

const errors = document.querySelector(".errors");
const username = document.querySelector("#username");
const pwd = document.querySelector("#password");
const pwdConfirm = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");
const form = document.querySelector("form");

const errorList = [];

function validateUsername() {
  if (username.value === "") {
    errorList.push("Username must not be empty");
  } else if (username.value.length < 10) {
    errorList.push("Username must be AL 10 chars");
  }
}

function validatePwd() {
  if (pwd.value == "") {
    errorList.push("Pwd cant be empty");
  } else if (pwd.value.length < 10) {
    errorList.push("Pwd len must be > 10");
  } else if (pwdConfirm.value !== pwd.value) {
    errorList.push("Pwds must match");
  }
}

function validateTerms() {
  if (terms.checked === false) {
    errorList.push("Must agree to terms");
  }
}
function clearErrorList() {
  errorList.length = 0;
}
function renderErrors() {
  errors.innerHTML = "";
  errorList.forEach((err) => {
    const errItem = document.createElement("li");
    errItem.innerText = err;
    errors.appendChild(errItem);
  });
}
// Display errors on submit

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrorList();
  validateUsername();
  validatePwd();
  validateTerms();
  renderErrors();

  if (errorList.length === 0) {
    // Can submit
    form.submit();
  }
});
