import './styles/style.css';
import { populateTasks, addTask, editTask, clearCompletedTasks, removeTask } from './modules/operationFunctions';

// const tasks = [
//   { description: 'Go to church', completed: false, index: 1 },
//   { description: 'Time with friend', completed: true, index: 2 },
//   { description: 'Chores', completed: false, index: 3 },
// ];


// Initialize tasks from local storage
populateTasks();

// Add task functionality
document.getElementById('add-btn').addEventListener('click', () => {
  const newTaskDescription = document.getElementById('newList').value;
  if (newTaskDescription.trim() !== '') { 
    addTask(newTaskDescription);
  }
});

// Delete task functionality
document.getElementById('list').addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash')) {
    const taskIndex = event.target.getAttribute('data-index');
    removeTask(taskIndex);
  } else if(event.target.classList.contains('fa-ellipsis-v')) {
    event.target.className = 'fas fa-trash trash';
  }
});

// Edit task functionality
document.getElementById('list').addEventListener('input', (event) => {
  if (event.target.classList.contains('list-item')) {
    const taskIndex = event.target.getAttribute('data-index');
    const newDescription = event.target.textContent.trim();
    editTask(taskIndex, newDescription);
  }
});

// Clear completed tasks
document.getElementById('clear').addEventListener('click', () => {
  clearCompletedTasks();
});

