require('colors');
const { inquirerMenu, inquirerPause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async () => {
  console.log('Hola Mundo');

  let opt = '';
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        // crear opción
        const description = await readInput('Descripción: ');

        tasks.createTask(description);
      break;

      case '2':
        console.log(tasks.getTasksList);

      break;
    }

    await inquirerPause();

  } while (opt !== '0');
}

main();
