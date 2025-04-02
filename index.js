let nivoi = document.querySelector('#nivoi')

const startDate = new Date("2025-04-03T00:00:00")
const currentDate = new Date();
let dan = 1 + Math.floor((currentDate - startDate) / (1000 * 3600 * 24)) + 22;

if (localStorage.getItem('score') !== null) {
    document.querySelector('#score').innerText = `poeni: ${localStorage.getItem('score')}/${dan}`;
} else {
    localStorage.setItem('score', 0)
    document.querySelector('#score').innerText = `poeni: ${localStorage.getItem('score')}/${dan}`;

    localStorage.setItem('otkljucanoDo', 1);
}

if (dan > parseInt(localStorage.getItem('otkljucanoDo'))) {
    localStorage.setItem('otkljucanoDo', dan)
}

for (let i = 1; i <= 28; i++) {
    if (localStorage.getItem(`pokusaji${i}`) === null) localStorage.setItem(`pokusaji${i}`, 0);

    if (localStorage.getItem(`preskocen${i}`) === null) localStorage.setItem(`preskocen${i}`, i < dan)
    else localStorage.setItem(`preskocen${i}`, parseInt(localStorage.getItem(`pokusaji${i}`)) === 0)

    let levelState, text = ''
    if (i < parseInt(localStorage.getItem('otkljucanoDo'))) {
        levelState = 'done'
        text = localStorage.getItem(`preskocen${i}`) === 'true' ? '❌' : '✅'
    } else if (i > dan) {
        levelState = 'locked'
        text = '⏳'
    } else if (i == parseInt(localStorage.getItem('otkljucanoDo'))) {
        levelState = 'notdone'
        text = ''
    }

    nivoi.innerHTML += `<button class="nivo ${levelState}" onclick="window.location.href='./nivoi/nivo${i}/nivo${i}.html';">${text}</button>`
}
