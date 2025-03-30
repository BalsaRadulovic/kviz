function checkAnswer(answer) {
    const resultPopup = document.getElementById('result-popup');
    const overlay = document.getElementById('overlay');
    const options = document.querySelectorAll('.option');

    // Disable all options
    options.forEach(option => option.disabled = true);
    
    // Show overlay
    overlay.style.display = 'block';

    const tacno = (answer === 'True');

    // Show result in popup
    if (tacno) {
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
        if (tacno) localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 1);
        window.location.href = '../../index.html'; // Redirect to the home page
    }, 3000); // 3 seconds delay before redirect
}