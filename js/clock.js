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
const lightsSection = document.getElementById('lights_section');
lightsSection.innerHTML += `
<div id = 'light_container'>
<img id = 'light_image' src = 'img/locked.png' alt = 'Light Image'>
</div>
`