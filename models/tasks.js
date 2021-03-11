require('colors');
const Task = require('./task');

class Tasks {
  lists = {};

  constructor() {
    this.lists = {};
  }

  get getTasksList() {
    const lists = [];
    Object.keys(this.lists).forEach(key => lists.push(this.lists[key]));

    return lists;
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach(task => this.lists[task.id] = task);

    return this.lists;
  }

  allTasks(listOfTasks = []) {
    listOfTasks.forEach((task, index) => {
      console.log(`${index + 1}. `.green + `${task.description} :: ${task.completedAt !== null ? (`Completada`.green) : (`Pendiente` .red)}`);
    });
  }

  allTaskByStatus(listOfTasks = [], completed) {
    const lista = (completed) ? listOfTasks.filter(task => task.completedAt !== null) : listOfTasks.filter(task => task.completedAt == null);

    lista.forEach((task, index) => {
      console.log(`${index + 1}. `.green + `${task.description}`);
    });
  }

  createTask(description = '') {
    const task = new Task(description);
    this.lists[task.id] = task;
  }

  updateTasks(ids = []) {
    ids.forEach(id => {
      const task = this.lists[id];

      if (task.completedAt === null) {
        task.completedAt = new Date().toISOString();
      }
    });

    this.getTasksList.forEach(task => {
      if (!ids.includes(task.id)) {
        this.lists[task.id].completedAt = null;
      }
    })
  }

  deleteTask(id = '') {
    if (this.lists[id]) {
      delete this.lists[id];
    }
  }
}

module.exports = Tasks;
