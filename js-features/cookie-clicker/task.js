
const clicker__counter = document.getElementById('clicker__counter');
const clicker__cookie = document.getElementById('cookie');

let counterClick = parseInt(clicker__counter.textContent);

let isCookieSmall = false;

clicker__cookie.addEventListener('click', () => {
    counterClick += 1;
    clicker__counter.textContent = counterClick;
    
    if (isCookieSmall) {
        clicker__cookie.width = 200;
        clicker__cookie.height = 200;
        isCookieSmall = false;
    } else {
        clicker__cookie.width = 150;
        clicker__cookie.height = 150;
        isCookieSmall = true;
    }
});

