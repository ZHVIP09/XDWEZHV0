//javascript code
//Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const closeButton = document.querySelector('.close-button');
 const links = navLinks.querySelectorAll('li');
const timeCounter = document.querySelector('.time-counter');
const visitorCounter = document.querySelector('.visitor-counter');
 
 links.forEach(link => {
     link.addEventListener('click', () => {
         navLinks.classList.remove('show');
         menuToggle.classList.remove('active');
     });
 });
 
function toggleMenu() {
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('active');
}

function closeMenu() {
    navLinks.classList.remove('show');
    menuToggle.classList.remove('active');
}

menuToggle.addEventListener('click', toggleMenu);

 closeButton.addEventListener('click', closeMenu);
 
 // Real Time Counter
 let counter = 0;
 setInterval(() => {
     counter++;
     document.querySelector('.counter').textContent = counter;
 }, 1000);

// Visitor Counter
let visitorCount = 0;
fetch('https://api.countapi.xyz/hit/zhvip09.github.io/page-views')
    .then(response => response.json())
    .then(data => {
        visitorCount = data.value;
        visitorCounter.querySelector('span').textContent = visitorCount;
    });

// Time Counter
const time = new Date(0);
const hours = time.getHours(0);
const minutes = time.getMinutes(0);
const seconds = time.getSeconds(0);

const timeCounterValue = timeCounter.querySelector('span');

function updateTime() {
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    timeCounterValue.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
}

setInterval(updateTime, 1000);
import countapi from 'countapi-js';

countapi.visits().then((result) => {
    console.log(result.value);
});