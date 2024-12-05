const form = document.getElementById('tasks__form'); 
const input = document.getElementById('task__input'); 
const taskList = document.getElementById('tasks__list');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const taskText = input.value.trim(); 

  if (taskText !== '') {
    addTask(taskText); 
    input.value = ''; 
  }
});

function addTask(taskText) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task'); 

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task__title'); 
  taskTitle.textContent = taskText; 

  const removeButton = document.createElement('a');
  removeButton.classList.add('task__remove'); 
  removeButton.href = '#'; 
  removeButton.textContent = '×'; 

  removeButton.addEventListener('click', function (event) {
    event.preventDefault(); 
    taskElement.remove(); 
  });

  taskElement.appendChild(taskTitle);
  taskElement.appendChild(removeButton);
  taskList.appendChild(taskElement);
}
