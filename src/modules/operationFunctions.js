let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const populateTasks = () => {
  const ulTag = document.getElementById('list');
  while (ulTag.hasChildNodes()) {
    ulTag.removeChild(ulTag.firstChild);
  }

  tasks.forEach((task, index) => {
    // <li>

    const listItem = document.createElement('li');

    listItem.className = 'list-item';
    listItem.innerHTML = `
        <input type="checkbox" data-index=${task.index} class='check' id='check-${index}' ${
  task.completed ? 'checked' : ''
}>
        <input type='text' id='editForm-${task.index}' class='item ${task.completed ? 'strike' : ''}' value = ${
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

const addTask = (description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.unshift(newTask);
  saveTasksToLocalStorage();
  populateTasks();
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

const checkedBox = (taskIndex) => {
  const task = tasks.find((task) => task.index === +taskIndex);
  task.completed = true;
  saveTasksToLocalStorage();
};

const notChecked = (taskIndex) => {
  const task = tasks.find((task) => task.index === +taskIndex);
  task.completed = false;
  saveTasksToLocalStorage();
  populateTasks();
};
export {
  populateTasks, addTask, removeTask, editTask, clearCompletedTasks, checkedBox, notChecked,
};
