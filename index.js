let nivoi = document.querySelector('#nivoi')

const currentTime = new Date();
let dan = currentTime.getHours();

if (localStorage.getItem('score') !== null) {
    document.querySelector('#score').innerText = `poeni: ${localStorage.getItem('score')}/${dan}`;
} else {
    localStorage.setItem('score', 0)
    document.querySelector('#score').innerText = `poeni: ${localStorage.getItem('score')}/${dan}`;

    localStorage.setItem('otkljucanoDo', 1);
}

for (let i = 1; i <= 28; i++) {
    if (localStorage.getItem(`pokusaji${i}`) === null) localStorage.setItem(`pokusaji${i}`, 0);

    let levelState, text = ''
    if (i < parseInt(localStorage.getItem('otkljucanoDo'))) {
        levelState = 'done'
        text = '✅'
    } else if (i > dan) {
        levelState = 'locked'
        text = '⏳'
    } else if (i == parseInt(localStorage.getItem('otkljucanoDo'))) {
        levelState = 'notdone'
        text = ''
    } else {
        levelState = 'locked'
        text = '❌'
    }

    nivoi.innerHTML += `<button class="nivo ${levelState}" onclick="window.location.href='./nivoi/nivo${i}/nivo${i}.html';">${text}</button>`
}
