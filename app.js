require('colors');
const { inquirerMenu, inquirerPause, readInput } = require('./helpers/inquirer');
const { saveRegister, readRegister } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

const main = async () => {
  let opt = '';
  const tasks = new Tasks();
  const listTasks = readRegister();

  if (listTasks) {
    tareas = tasks.loadTasksFromArray(listTasks);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const description = await readInput('Descripción: ');
        tasks.createTask(description);
      break;

      case '2':
        console.log(tasks.getTasksList);
      break;
    }

    saveRegister(tasks.getTasksList);
    await inquirerPause();

  } while (opt !== '0');
}

main();
