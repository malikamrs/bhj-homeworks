function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const pair of cookies) {
        const [key, value] = pair.split('=');
        if (key.trim() === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('#subscribe-modal');
    const modalClose = modal.querySelector('.modal__close');

    const isClosed = getCookie('subscribeModalClosed');

    if (!isClosed) {
        modal.classList.add('modal_active');
    }

    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        setCookie('subscribeModalClosed', 'true', 30);
    });
});