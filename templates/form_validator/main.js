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

function validateForm() {
  // Use HTML constraint API to check form validity
  isValid = form.checkValidity();
  console.log(isValid);
  // Style main message for an error
  message.textContent = "Please fill out all fields.";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
}
// Event Listener
form.addEventListener("submit", processFormData);
