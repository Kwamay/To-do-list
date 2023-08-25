let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const inverseTasks = tasks.reverse();

const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const populateTasks = () => {
  const ulTag = document.getElementById('list');
  while (ulTag.hasChildNodes()) {
    ulTag.removeChild(ulTag.firstChild);
  }

  inverseTasks.forEach((task) => {
    // <li>

    const listItem = document.createElement('li');

    listItem.className = 'list-item';
    listItem.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''}>
        <input type='text' id='editForm' class='item' value = ${
  task.description
} data-index='${task.index}'>
      `;

    // <i>
    const iTag = document.createElement('i');
    iTag.className = 'fas fa-ellipsis-v';

    // <div>
    const divTag = document.createElement('div');
    ulTag.appendChild(divTag);

    divTag.className = 'list-container';
    divTag.appendChild(listItem);
    divTag.appendChild(iTag);
  });
};

function clearForm() {
  // Replace 'myForm' with the actual ID of your form element
  document.getElementById('newList');
}

const addTask = (description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  saveTasksToLocalStorage();
  populateTasks();
  clearForm();
};

const removeTask = (index) => {
  tasks.splice(index, 1);
  tasks.forEach((task, idx) => {
    task.index = idx;
  });
  saveTasksToLocalStorage();
  populateTasks();
};

const editTask = (index, newDescription) => {
  tasks[index - 1].description = newDescription;
  saveTasksToLocalStorage();
};

const clearCompletedTasks = () => {
  tasks = tasks.filter((task) => !task.completed);

  tasks.forEach((task, idx) => {
    task.index = idx + 1;
  });

  saveTasksToLocalStorage();
  populateTasks();
};

export {
  populateTasks, addTask, removeTask, editTask, clearCompletedTasks,
};
