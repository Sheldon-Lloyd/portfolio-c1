
const modalButton = document.querySelector('.modal-button');
const closeButton = document.querySelector('.close');
const modal = document.querySelector('.modal');
function toggleModal(){

modal.classList.toggle('is-hidden');

}

modalButton.addEventListener('click',function () {
    toggleModal()
});
closeButton.addEventListener('click',function (e) {
    e.preventDefault();
    toggleModal()
});
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    modal.classList.add('is-hidden');
  }
});

// DOM Elements and Global Variables
const addTaskBtn = document.getElementById('add-feature');
const input = document.querySelector('.input-feature');
const taskList = document.querySelector('#feature-list');

let taskId = 0;

// Add a new task to the list using async as the old way lagged
async function addTask (task) {
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <input class="task-check" type="checkbox" id="task-${taskId}">
    <label class="task-check-label" for="task-${taskId}">${task}</label>
    <button type="button" class="close btn-close" aria-label="Close" data-task-id="${taskId}">&#215;</button>
  `;
  taskList.appendChild(taskItem);
  taskId++;
}

// Remove a task from the list using async so the it does not get in the way
async function removeTask (taskId) {
  const taskItem = document.querySelector(`#task-${taskId}`).parentNode;
  taskList.removeChild(taskItem);
}

// Handle Add Task button click
addTaskBtn.addEventListener('click', () => {
  const task = input.value.trim();

  if (task !== '') {
    addTask(task);
    input.value = '';
  }
});

// Handle completing a task and removing it from the list
taskList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.matches('.task-check')) {
    const label = target.parentNode.querySelector('label');
    if (target.checked) {
      label.classList.add('text-decoration-line-through');
    } else {
      label.classList.remove('text-decoration-line-through');
    }
  } else if (target.matches('.btn-close')) {
    const taskId = target.getAttribute('data-task-id');
    removeTask(taskId);
  }
});