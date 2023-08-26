import './styles/style.css';
import {
  populateTasks,
  addTask,
  editTask,
  clearCompletedTasks,
  removeTask,
  checkedBox,
  notChecked,
} from './modules/operationFunctions.js';

// Initialize tasks from local storage
populateTasks();

// Add task functionality
document.getElementById('add-btn').addEventListener('click', () => {
  const newTaskDescription = document.getElementById('newList');
  if (newTaskDescription.value.trim() !== '') {
    addTask(newTaskDescription.value);
    newTaskDescription.value = '';
  }
});

// Delete task functionality
document.getElementById('list').addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash')) {
    const taskList = event.target.parentElement.childNodes[0];
    const taskItem = taskList.querySelector('.item');
    const taskIndex = taskItem.getAttribute('data-index');
    removeTask(taskIndex);
  } else if (event.target.classList.contains('fa-ellipsis-v')) {
    event.target.className = 'fas fa-trash trash';
  } else if (event.target.classList.contains('check')) {
    const idx = event.target.getAttribute('data-index');
    event.target.addEventListener('change', () => {
      const checkBoxInput = document.getElementById(`editForm-${idx}`);
      if (event.target.checked) {
        checkedBox(idx);
        // add strike class
        checkBoxInput.classList.add('strike');
      } else {
        notChecked(idx);
        // remove stroke class
        checkBoxInput.classList.remove('strike');
      }
    });
  }
});

function handleFocus(event) {
  const inputValue = event.target.value;
  const taskIndex = event.target.getAttribute('data-index');
  const newDescription = inputValue.trim();
  editTask(taskIndex, newDescription);
}

// Edit task functionality
const element = document.querySelectorAll('#editForm');
element.forEach((el) => {
  el.addEventListener('focusout', handleFocus);
});

// Clear completed tasks
document.getElementById('clear').addEventListener('click', () => {
  clearCompletedTasks();
});
