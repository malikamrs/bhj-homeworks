const timerElement = document.getElementById('timer');

let timeLeft = parseInt(timerElement.textContent);

function updateTimer() {
    timeLeft -= 1;

    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}

const timerInterval = setInterval(updateTimer, 1000);