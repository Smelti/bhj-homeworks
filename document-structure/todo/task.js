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
  taskList.insertAdjacentHTML(
    'beforeend',
    `
    <div class="task">
      <div class="task__title">${taskText}</div>
      <a href="#" class="task__remove">&times</a>
    </div>
    `
  );
  
  const removeButton = taskList.lastElementChild.querySelector('.task__remove');
  removeButton.addEventListener('click', function (event) {
    event.preventDefault();
    removeButton.closest('.task').remove(); 
  });
}
