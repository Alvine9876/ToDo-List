document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="deleteBtn" onclick="deleteTask(this)">Delete</button>`;

    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
