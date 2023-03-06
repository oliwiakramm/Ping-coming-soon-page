const formEl = document.querySelector(".form");

const emailRegExp = /^\S+@\S+\.\S+$/;

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const errorMsg = formEl.querySelector(".error__msg");

  if (emailInput.value === "") {
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
    formEl.classList.add("invalid");
  } else if (emailRegExp.test(emailInput.value)) {
    if (formEl.classList.contains("invalid")) {
      formEl.classList.remove("invalid");
    }
    formEl.classList.add("valid");
  } else {
    if (formEl.classList.contains("valid")) {
      formEl.classList.remove("valid");
    }
    formEl.classList.add("invalid");
    errorMsg.textContent = "Please provide a valid email address";
  }
});
