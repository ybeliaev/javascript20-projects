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

let today = new Date().toISOString().split("T")
console.log(today)