const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let deadCount = parseInt(dead.textContent);
let lostCount = parseInt(lost.textContent);
let gameActive = true; 

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function checkGameEnd() {
    if (deadCount >= 10) {
        gameActive = false;
        alert('Урааа! Вы победили! Убито кротов: ' + deadCount);
        resetGame();
    } else if (lostCount >= 5) {
        gameActive = false;
        alert('Игра окончена! Ха! Вы проиграли. Промахов: ' + lostCount);
        resetGame();
    }
}

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    dead.textContent = deadCount;
    lost.textContent = lostCount;
    gameActive = true;
}

for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', function() {
        if (!gameActive) {
            return;
        }
        
        if (this.classList.contains('hole_has-mole')) {
            deadCount++;
            dead.textContent = deadCount;
            
            this.classList.remove('hole_has-mole');
        } else {
            lostCount++;
            lost.textContent = lostCount;
        }
        
        checkGameEnd();
    });
}