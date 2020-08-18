console.log("work custom countdown");

let countdownForm = document.getElementById('countdownForm');
let inputContainer = document.getElementById('input-container');
let dateEl = document.getElementById('date-picker');

let countdownEl = document.getElementById('countdown');
let countdownElTitle = document.getElementById('countdown-title');
let countdownBtn = document.getElementById('countdown-button');
let timeElements = document.querySelectorAll('span.date');

let completeEl = document.getElementById('complete');
let completeElInfo = document.getElementById('complete-info');
let completeBtn = document.getElementById('complete-button');

let countdownTitle = "";
let countdownDate = "";
let countdownValue;

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;


// Set Date Input Min & Value with Today's Date
let today = new Date().toISOString().split("T")
dateEl.setAttribute("min", today)

// Populate Countdown / Complete UI
function updateDOM(){
  let now = new Date().getTime()
  let distance = countdownValue - now
  let days = Math.floor(distance/day)
  let hours = Math.floor((days % 24) / hour)
  let minutes = Math.floor((distance % hour) / minute)
  let seconds = Math.floor((distance % minute) / second)
  // Populate Countdown  
  completeElInfo.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`
  timeElements[1].textContent = `${hours}`
  timeElements[2].textContent = `${minutes}`
  timeElements[3].textContent = `${seconds}`
  // Hide Input
  inputContainer.hidden = true;
  // Show Countdown
  completeEl.hidden = true;
  countdownEl.hidden = false;
}



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
      if(countdownValue === ""){
        alert("Please select of current data")
      }else{
        countdownValue = new Date(countdownDate).getTime();
        updateDOM()
      }
}
// Event Listener
countdownForm.addEventListener('submit', updateCountdown);