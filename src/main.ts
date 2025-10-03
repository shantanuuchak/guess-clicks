import './style.css'

// DOM Targetting
const main = document.querySelector('main')!;
const userBtn = document.querySelector('button');


userBtn?.addEventListener('click', () => {
    userClicks += 1;
    console.log("Secret value is:", secretValue)
    console.log("User clicks are:", userClicks)
})

// === Game Logic ===
const secretValue = 5;
let userClicks = 0;

setTimeout(() => {
    if (userClicks === secretValue) {
        main.style.backgroundColor = 'green';
    } else {
        main.style.backgroundColor = 'red';
    }

}, 5000)