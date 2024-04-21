const form = document.querySelector("form");
const submitBtn = document.querySelector("button");

const passwordField = document.querySelector("#password");
const passwordConfirmField = document.querySelector("#confirm-password");
const passwordErrorMsg = document.querySelector("#password-error-msg");
const allFields = document.querySelectorAll("input");

submitBtn.addEventListener("click", (e) => {
  const password = passwordField.value;
  const passwordConfirm = passwordConfirmField.value;
  let passwordsMatch = true;

  if (password !== passwordConfirm) {
    passwordErrorMsg.innerText = "* Password do not match";
    passwordField.style.borderColor = "red";
    passwordConfirmField.style.borderColor = "red";
    passwordsMatch = false;
    e.preventDefault();
  } else if (passwordsMatch && form.checkValidity()) {
    form.submit();
  }
});
