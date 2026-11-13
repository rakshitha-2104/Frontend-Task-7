const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const errorMsg = document.getElementById('errorMsg');
const taskCountDisplay = document.getElementById('taskCount');

let totalTasks = 0;

function updateTaskCount(change) {
    totalTasks += change;
    taskCountDisplay.innerText = totalTasks;
}

function addTask() {
    const taskValue = taskInput.value.trim();

    // Input Validation
    if (taskValue === "") {
        errorMsg.classList.remove('hidden');
        return;
    }
    
    errorMsg.classList.add('hidden');

    const li = document.createElement('li');
    li.classList.add('task-item');

    const taskText = document.createElement('span');
    taskText.innerText = taskValue;
    taskText.classList.add('task-text');

    taskText.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add('delete-btn');
    
    deleteBtn.addEventListener('click', function() {
        li.remove();
        updateTaskCount(-1);
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    updateTaskCount(1);
    taskInput.value = "";
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});