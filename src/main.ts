import './style.css'

// DOM Targetting
const main = document.querySelector('main');
const title = document.querySelector('title');
const titleEl = document.querySelector('.title');
const userBtn = document.querySelector('button');

// === Game Logic ===
function startGame() {
    const secretValue = 5;
    let userClicks = 0;

    userBtn?.addEventListener('click', () => {
        ++userClicks;
    })

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userClicks === secretValue) {
                resolve();
            } else {
                reject();
            }

        }, 5000)
    })
}

function refreshGame(text = 'retry') {
    userBtn.textContent = text;
    userBtn?.addEventListener('click', () => {
        location.reload()
    })
}

startGame()
    .then(() => {
        title.textContent = "you gussed it right!"
        titleEl.textContent = "you gussed it right!"
        refreshGame('win again')
    })
    .catch(() => {
        title.textContent = 'a retry won\'t hurt!'
        titleEl.textContent = 'a retry won\'t hurt!'
        refreshGame()

    })