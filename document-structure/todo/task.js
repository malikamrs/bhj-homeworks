const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        addTask(text);
        input.value = '';
    }
});

function addTask(text) {
    const task = document.createElement('div');
    task.className = 'task';
    
    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = text;
    
    const taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.className = 'task__remove';
    taskRemove.textContent = '×';
    
    taskRemove.addEventListener('click', (e) => {
        e.preventDefault();
        task.remove();
    });
    
    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    tasksList.appendChild(task);
}