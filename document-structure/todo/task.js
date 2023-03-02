const taskList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');

function taskCreator() {
  taskList.insertAdjacentHTML(
    'afterEnd',
    `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`
  );

  input.value = '';

  const closeButtons = Array.from(document.getElementsByClassName('task__remove'));

  closeButtons.forEach(element => {
    element.addEventListener('click', event => {
      target = event.target;
      target.closest('.task').remove();
    })
});
}

button.addEventListener('click', event => {
  event.preventDefault();
  if (input.value.trim() !== '') {
    taskCreator();
  }
});