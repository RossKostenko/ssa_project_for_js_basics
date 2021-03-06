const clockSection = document.getElementById('clock_section');
clockSection.innerHTML += `
<div id = 'calendarContainer'>
    <div id = 'currentDay'></div>
    <div id = 'monthDay'></div>
</div >
`

let myDate = new Date();
let weekDayNumber = myDate.getDay();
let monthDay = myDate.getDate()
document.getElementById('monthDay').innerHTML = monthDay;


let weekday;

switch (true) {
  case weekDayNumber === 0:
    weekday = "SUN";
    break;
  case weekDayNumber === 1:
    weekday = "MON";
    break;
  case weekDayNumber === 2:
    weekday = "TUE";
    break;
  case weekDayNumber === 3:
    weekday = "WED";
    break;
  case weekDayNumber === 4:
    weekday = "THU";
    break;
  case weekDayNumber === 5:
    weekday = "FRI";
    break;
  case weekDayNumber === 6:
    weekday = "SAT";
    break;
}

const currentDay = document.getElementById('currentDay');
currentDay.innerHTML = weekday;

// Security Application does not work

const securitySection = document.getElementById('security_section');
securitySection.innerHTML += `
<div id = 'lock_container'>
<img id = 'lock' src = 'img/unlocked.png' alt = 'clockImage'>
</div>
`
function popImage() {
     let a = document.getElementById('lock_container');
    a.innerHTML = '';
}
let image = document.getElementById('#lock');
image.addEventListener('click', popImage);

// Light section 
const lightSection = document.getElementById('lights_section');
lightSection.innerHTML += `
<div id = 'lights_container'>
    <image id = 'lights_image' src = 'img/unlocked.png' alt = 'Light Image'>
</div>
<div id = 'lights_buttons_container'>
<button>up</button>
<button>down</button>
</div>
` 