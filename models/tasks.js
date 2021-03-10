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

  createTask(description = '') {
    const task = new Task(description);

    this.lists[task.id] = task;
  }
}

module.exports = Tasks;
