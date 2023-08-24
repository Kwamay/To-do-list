let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const populateTasks = () => {
    const ulTag = document.getElementById('list');
  
    while (ulTag.hasChildNodes()){
      ulTag.removeChild(ulTag.firstChild)
    }

    tasks.forEach((task) => {
      //<li>
      const listItem = document.createElement('li');
      listItem.className = 'list-item';
      listItem.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''}>
        ${task.description}
      `;


      //<i>
      const iTag = document.createElement('i');
      iTag.className = "fas fa-ellipsis-v";


      // <div>
      const divTag = document.createElement('div');
      ulTag.appendChild(divTag);

      divTag.className = 'list-container';
      divTag.appendChild(listItem);
      divTag.appendChild(iTag);
     
      
    });
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
}

const removeTask = (index) => {
  tasks.splice(index - 1, 1);
  tasks.forEach((task, idx) => (task.index = idx + 1));
  saveTasksToLocalStorage();
  populateTasks();
}

const editTask = (index, newDescription) => {
  tasks[index - 1].description = newDescription;
  saveTasksToLocalStorage();
}

const clearCompletedTasks = () => {
  tasks = tasks.filter(task => !task.completed);
  tasks.forEach((task, idx) => (task.index = idx + 1));
  saveTasksToLocalStorage();
  populateTasks();
}

export { populateTasks, addTask, removeTask, editTask, clearCompletedTasks };
