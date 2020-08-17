console.log("work custom countdown");

let countdownForm = document.getElementById('countdownForm');
let inputContainer = document.getElementById('input-container');
let dateEl = document.getElementById('date-picker');

let countdownEl = document.getElementById('countdown');
let countdownElTitle = document.getElementById('countdown-title');
let countdownBtn = document.getElementById('countdown-button');
let timeElements = document.querySelectorAll('span');

let completeEl = document.getElementById('complete');
let completeElInfo = document.getElementById('complete-info');
let completeBtn = document.getElementById('complete-button');

let countdownTitle = "";
let countdownDate = "";

// Set Date Input Min & Value with Today's Date
let today = new Date().toISOString().split("T")
dateEl.setAttribute("min", today)

// Take value from Input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate  = e.srcElement[1].value;
    savedCountdown = {
        title: countdownTitle,
        date: countdownDate,
      };
      localStorage.setItem('countdown', JSON.stringify(savedCountdown));
}
// Event Listener
countdownForm.addEventListener('submit', updateCountdown);