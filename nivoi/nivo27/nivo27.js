const nivo = 27
const tacanOdgovor = 'francuska rusija njemačka'

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
        resultPopup.textContent = "Tačno!";
        resultPopup.style.backgroundColor = 'green';
    } else {
        resultPopup.textContent = "Netačno!";
        resultPopup.style.backgroundColor = 'red';
    }

    // Show the result popup
    resultPopup.style.display = 'block';

    // Wait for 3 seconds (3000 milliseconds) and then navigate to the home page
    setTimeout(() => {
        console.log(localStorage.getItem(`pokusaji${nivo}`))
        if (answer === tacanOdgovor) {
            if (parseInt(localStorage.getItem(`pokusaji${nivo}`)) === 1)
                localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 1);

            localStorage.setItem('otkljucanoDo', parseInt(localStorage.getItem('otkljucanoDo')) + 1);
        }

        window.location.href = '../../index.html'; // Redirect to the home page
    }, 2000); // 3 seconds delay before redirect
}