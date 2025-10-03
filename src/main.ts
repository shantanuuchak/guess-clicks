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
    main?.classList.remove('background-win');
    main?.classList.remove('background-lose');
}

startGame()
    .then(() => {
        title.textContent = "you gussed it right!"
        titleEl.textContent = "you gussed it right!"
        main?.classList.add('background-win')
        refreshGame('win again')
    })
    .catch(() => {
        title.textContent = 'a retry won\'t hurt!'
        titleEl.textContent = 'a retry won\'t hurt!'
        main?.classList.add('background-lose')
        refreshGame('play again')
    })