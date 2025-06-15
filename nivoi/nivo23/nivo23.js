const nivo = 23
const tacanOdgovor = 'vatican'

function checkAnswer() {
    localStorage.setItem(`pokusaji${nivo}`, parseInt(localStorage.getItem(`pokusaji${nivo}`)) + 1);
    const answer = document.getElementById('answer-input') ? document.getElementById('answer-input').value.trim().toLowerCase() : null;
    const resultPopup = document.getElementById('result-popup');
    const overlay = document.getElementById('overlay');
    const options = document.querySelectorAll('.option');

    // Disable all options
    options.forEach(option => option.disabled = true);
    
    // Show overlay
    overlay.style.display = 'block';

    // Show result in popup
    if (answer === tacanOdgovor) {
        resultPopup.textContent = "Correct!";
        resultPopup.style.backgroundColor = 'green';
    } else {
        resultPopup.textContent = "Incorrect!";
        resultPopup.style.backgroundColor = 'red';
    }

    // Show the result popup
    resultPopup.style.display = 'block';

    // Wait for 3 seconds (3000 milliseconds) and then navigate to the home page
    setTimeout(() => {
        console.log(localStorage.getItem(`pokusaji${nivo}`))
        if (answer === tacanOdgovor) {
            localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 1);

            localStorage.setItem('otkljucanoDo', parseInt(localStorage.getItem('otkljucanoDo')) + 1);
            localStorage.setItem(`rijesen${nivo}`, 'rijesen');
        }

        window.location.href = '../../index.html'; // Redirect to the home page
    }, 2000); // 3 seconds delay before redirect
}