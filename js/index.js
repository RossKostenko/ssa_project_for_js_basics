// Clock Section

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

// Security Application 

const securitySection = document.getElementById('security_section');
securitySection.innerHTML += `
<div id = 'lock_container'>
<img id = 'lock' src = 'img/unlocked.png' alt = 'clockImage'>
</div>
`;
let unlocked = true;
function switchSecurity() {
    let securityStatus = document.getElementById('lock');
    if (unlocked === true) {
        securityStatus.src = 'img/locked.png';
        unlocked = false;
    } else {
        securityStatus.src = 'img/unlocked.png';
        unlocked = true;
    }
}
let image = document.getElementById('lock');
image.addEventListener('click', switchSecurity);

// Light section 

const lightSection = document.getElementById('lighs_section')
lightSection.innerHTML += `
<div id = 'lights_container' >
    <img id = 'light_img' src = 'img/lights.png' alt = 'Lights Image'>
</div>
<div id = 'lights_buttons_container'>
    <div class = 'light_buttons_cont' id = 'light_buttons_up_container'>
            <img class = 'light_buttons' id = 'light_buttons_up' src = 'img/up_button.png' alt = 'Lights Image'>
    </div>
    <div id = 'lights_status'> 100% </div>
    <div class = 'light_buttons_cont' id = 'light_buttons_down_container'>
            <img class = 'light_buttons' id = 'light_buttons_down' src = 'img/down_button.png' alt = 'Lights Image'>
    </div>
</div>
`;

let lightStatus = 100; 
function increaseLights() {
    if (lightStatus === 100) {
        return lightStatus = 100;
    } else if (lightStatus === 0) { 
        const lightsImage = document.getElementById('light_img');
        lightsImage.src = 'img/lights.png';
        lightStatus = 10;
        const lightsStatusDiv = document.getElementById('lights_status');
        lightsStatusDiv.innerHTML = `${lightStatus}%`
        return lightStatus;
    } else { 
        lightStatus += 10;
        const lightsStatusDiv = document.getElementById('lights_status');
        lightsStatusDiv.innerHTML = `${lightStatus}%`
    }
}

function decreaseLights() {
    if (lightStatus === 0) {
        return lightStatus = 0;
    } else if (lightStatus === 10) { 
        const lightsImage = document.getElementById('light_img');
        lightsImage.src = 'img/no_lights.png';
        lightStatus = 0;
        const lightsStatusDiv = document.getElementById('lights_status');
        lightsStatusDiv.innerHTML = `${lightStatus}%`
        return lightStatus;
    } else { 
        lightStatus -= 10;
        const lightsStatusDiv = document.getElementById('lights_status');
        lightsStatusDiv.innerHTML = `${lightStatus}%`
    }
}

let upLighButton = document.getElementById('light_buttons_up_container');
upLighButton.addEventListener('click', increaseLights);

let downLighButton = document.getElementById('light_buttons_down_container');
downLighButton.addEventListener('click', decreaseLights);


// Heating

const heatingSection = document.getElementById('heating_section')
heatingSection.innerHTML += `
<div id = 'heater_container'>
    <img id = 'heater_image' src = 'img/noheating.png'>
</div>
<div>
    <div class = 'selection_containers'>
        <select class = 'selectors' name = "heat_basics" id = "heat_basics_id">
		    <option value = "noheat" >Heat Off</option>
		    <option value = "heaton" >Heat On</option>
        </select>
    </div>
    <div class = 'selection_containers'>
        <select class = 'selectors' name = "heat_options" id = "heat_options_id"></select>
    <div>
</div>
`
;
let heatArray = {
	noheat : ['No Heat'],
	heaton :['Floor Heat On', 'Central Heat On', 'All Heatin On'],
} 

let heatSelector = document.getElementById('heat_basics_id');
heatSelector.addEventListener("change", getHeatOptionFromArray);

let heatOptions = document.getElementById('heat_options_id');

function getHeatOptionFromArray() {
	heatOptions.innerHTML = '';
    let selectedHeaterBasics = heatSelector.value;
    if (selectedHeaterBasics === 'heaton') {
        let heaterImage = document.getElementById('heater_image');
        heaterImage.src = 'img/heating.png'
    }
	for (let i = 0; i < heatArray[selectedHeaterBasics].length; i++) {
		let new_option = document.createElement('option');
		new_option.innerHTML = heatArray[selectedHeaterBasics][i];
        heatOptions.appendChild(new_option);
	}
}


// Music section

const musicSection = document.getElementById('music_sections');
musicSection.innerHTML += `
<div id = 'music_container'>
    <img id = 'music_image' src = 'img/music_off.png' alt = 'Music Icon Image'>
</div>
<div>
    <div class = 'selection_containers'>
        <select class = 'selectors' name = "musik_on_off" id = "musik_on_off">
		    <option value = "nomusic" >Music Off</option>
		    <option value = "musicon" >Music On</option>
        </select>
    </div>
    <div class = 'selection_containers'>
        <select class = 'selectors' name = "music_options" id = "music_options_id"></select>
    <div>
</div>
`;

let musicArray = {
	nomusic : ['No Music'],
	musicon :['Romantic Dinner', 'Relaxing', 'Lets Party'],
} 

let musicSelector = document.getElementById('musik_on_off');
musicSelector.addEventListener("change", getMusicOptionFromArray);

let musicOptions = document.getElementById('music_options_id');

function getMusicOptionFromArray() {
	musicOptions.innerHTML = '';
    let selectedMusicBasics = musicSelector.value;
    if (selectedMusicBasics === 'musicon') {
        let musicImage = document.getElementById('music_image');
        musicImage.src = 'img/music.png'
    }
	for (let i = 0; i < musicArray[selectedMusicBasics].length; i++) {
		let new_option = document.createElement('option');
		new_option.innerHTML = musicArray[selectedMusicBasics][i];
        musicOptions.appendChild(new_option);
	}
}

// Cleaning Section

const cleaningSection = document.getElementById('cleaning_section');
cleaningSection.innerHTML += `
<div id = 'cleaning_container'>
    <img id = 'cleaning_image' src = 'img/cleaning.png' alt = 'Cleaner Image'>
</div>
<div>
    <div class = 'selection_containers'>
        <select class = 'selectors' name = "musik_on_off" id = "cleaning_on_off">
		    <option value = "itsclean" >Everything is clean</option>
		    <option value = "timetoclean" >Time To Clean</option>
        </select>
    </div>
    <div class = 'selection_containers'>
        <select class = 'selectors' name = "cleaning_options" id = "cleaning_options_id"></select>
    <div>
</div>
`

// Pet Section 

const petSection = document.getElementById('pet_section');
petSection.innerHTML += `
<div id = 'pet_container'>
    <img id = 'pet_image' src = 'img/cat.png' alt = 'Pet Image'>
</div>
`

// Dont press this button

const blowSection = document.getElementById('blow_the_house');
blowSection.innerHTML += `
<div id = 'blow_container'>
    <button> DONT PRESS THIS BUTTON</button>
</div>
`