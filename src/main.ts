import './style.css'

// DOM Targetting
const main = document.querySelector('main');
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
        main?.classList.remove('background-win');
        main?.classList.remove('background-lose');
    })
}

startGame()
    .then(() => {
        main?.classList.add('background-win')
        titleEl.textContent = "you gussed it right!"
        refreshGame('win again')
    })
    .catch(() => {
        main?.classList.add('background-lose')
        titleEl.textContent = 'a retry won\'t hurt!'
        refreshGame('play again')
    })