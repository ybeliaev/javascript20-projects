console.log("custom title working..");

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Switch Theme Dynamically
function switchTheme(e) {
    console.log("Switch изменён", e)
  }

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);