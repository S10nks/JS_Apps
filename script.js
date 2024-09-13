const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTask');
const prioritySelect = document.getElementById('priority');
const addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener('click', () => {
    const taskText = newTaskInput.value;
    const priority = prioritySelect.value;
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const taskDate = new Date();
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <span class="${priority}">${priority}</span>
            <span class="added">${taskDate.toLocaleDateString()}</span>
            <button class="completeBtn">Complete</button>
        `;

        taskList.appendChild(taskItem);
        newTaskInput.value = '';
        prioritySelect.value = 'high'; // Reset priority to high

        const completeBtn = taskItem.querySelector('.completeBtn');
        completeBtn.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
    }
});