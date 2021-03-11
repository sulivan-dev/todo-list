require('colors');
const { inquirerMenu, inquirerPause, readInput, allTaskToDelete, allTaskToComplete, confirm } = require('./helpers/inquirer');
const { saveRegister, readRegister } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

const main = async () => {
  let opt = '';
  let allTasks = {};
  const tasks = new Tasks();
  const listTasks = readRegister();

  if (listTasks) {
    allTasks = tasks.loadTasksFromArray(listTasks);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const description = await readInput('Descripción: ');
        tasks.createTask(description);
      break;

      case '2':
        tasks.allTasks(listTasks);
        // console.log(tasks.getTasksList);
      break;

      case '3':
        tasks.allTaskByStatus(listTasks, true);
        // console.log(tasks.getTasksList);
      break;

      case '4':
        tasks.allTaskByStatus(listTasks, false);
        // console.log(tasks.getTasksList);
      break;

      case '5':
        const ids = await allTaskToComplete(tasks.getTasksList);
        tasks.updateTasks(ids);
      break;

      case '6':
        const id = await allTaskToDelete(tasks.getTasksList);

        if (id !== '0') {
          const confirmDelete = await confirm('¿Está seguro?');

          if (confirmDelete) {
            tasks.deleteTask(id);
            console.log('Tarea borrada!');
          }
        }
      break;
    }

    saveRegister(tasks.getTasksList);
    await inquirerPause();

  } while (opt !== '0');
}

main();
