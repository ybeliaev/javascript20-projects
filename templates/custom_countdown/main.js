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
let countdownActive;

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;


// Set Date Input Min & Value with Today's Date
let today = new Date().toISOString().split("T")
dateEl.setAttribute("min", today)

// Populate Countdown / Complete UI
function updateDOM(){
  countdownActive = setInterval(() => {
    let now = new Date().getTime()
    let distance = countdownValue - now
    let days = Math.floor(distance/day)
    let hours = Math.floor((days % 24) / hour)
    let minutes = Math.floor((distance % hour) / minute)
    let seconds = Math.floor((distance % minute) / second)

    // Hide Input
    inputContainer.hidden = true;

    // If the cowntdown has ended show complite
    if(distance < 0){
      countdownEl.hidden
      clearInterval(countdownActive)
      completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`
      completeEl.hidden = false;
    }else{
      completeElInfo.textContent = `${countdownTitle}`;
      timeElements[0].textContent = `${days}`
      timeElements[1].textContent = `${hours}`
      timeElements[2].textContent = `${minutes}`
      timeElements[3].textContent = `${seconds}`
      completeEl.hidden = true
      countdownEl.hidden = false
    }
  }, second)
  
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
      if(countdownDate === ""){
        alert("Please select of current data")
      }else{
        countdownValue = new Date(countdownDate).getTime();
        updateDOM()
      }
}

function reset() {
  // Hide countdowns, show input form
  countdownEl.hidden = true;
  completeEl.hidden = true;
  inputContainer.hidden = false;
  // Stop the countdown
  clearInterval(countdownActive);
  // Reset values, remove localStorage item
  countdownTitle = '';
  countdownDate = '';  
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener("click", reset)
completeBtn.addEventListener("click", reset)