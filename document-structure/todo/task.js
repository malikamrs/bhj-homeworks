const form = document.querySelector('.tasks__control');
const input = document.querySelector('.tasks__input');
const addButton = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addButton.click();
});

addButton.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;

    addTask(text);
    input.value = '';
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addButton.click();
    }
});

tasksList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.preventDefault();
        e.target.closest('.task').remove();
    }
});

function addTask(title) {
    tasksList.insertAdjacentHTML('afterbegin',
        `<div class="task">
            <div class="task__title">
                ${title}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
    );
}