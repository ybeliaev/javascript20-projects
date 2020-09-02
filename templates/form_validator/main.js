console.log(
  "Form validator: ",
  new Date().getHours() + ":" + new Date().getMinutes()
);
const form = document.querySelector("#form");
const password1El = document.querySelector("#password1");
const password2El = document.querySelector("#password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  // Use HTML constraint API to check form validity
  isValid = form.checkValidity();
  console.log(isValid);
  // Style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
  }
  // Chek to see if password match
  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
  }
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
}
// Event Listener
form.addEventListener("submit", processFormData);
