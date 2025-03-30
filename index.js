let nivoi = document.querySelector('#nivoi')

if (localStorage.getItem('score') !== null) {
    document.querySelector('#score').innerText = `poeni: ${localStorage.getItem('score')}`;
} else {
    localStorage.setItem('score', 0)
}

for (let i = 1; i <= 25; i++) {
    let levelState
    if (i <= parseInt(localStorage.getItem('score'))) {
        levelState = 'done'
    } else if (i == parseInt(localStorage.getItem('score'))+1) {
        levelState = 'notdone'
    } else {
        levelState = 'locked'
    }

    nivoi.innerHTML += `<button class="nivo ${levelState}" onclick="window.location.href='./nivoi/nivo${i}/nivo${i}.html';">${i}</button>`
}
