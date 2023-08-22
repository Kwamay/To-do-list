import './styles/style.css';

const tasks = [
  { description: 'Go to church', completed: false, index: 1 },
  { description: 'Time with friend', completed: true, index: 2 },
  { description: 'Chores', completed: false, index: 3 },
];

function populateTasks() {
  const listElement = document.createElement('ul');
  listElement.className = 'todo-list';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''}>
      ${task.description}
    `;
    listElement.appendChild(listItem);
  });

  document.getElementById('container').appendChild(listElement);
}

populateTasks();
