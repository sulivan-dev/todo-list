const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear tarea`
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas`
      },
      {
        value: '3',
        name: `${'3.'.green} Listas tareas completas`
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes`
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tarea`
      },
      {
        value: '0',
        name: `${'0.'.green} Salir`
      }
    ]
  }
];

const inquirerMenu = async () => {
  console.clear();

  console.log('====================='.green);
  console.log('Seleccione una opción'.white);
  console.log('=====================\n'.green);

  const { opcion } = await inquirer.prompt(questions);

  return opcion;
}

const inquirerPause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${ 'enter'.green } para continuar`
    }
  ];

  const { opcion } = await inquirer.prompt(question);

  return opcion;
}

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingresa un valor';
        }

        return true;
      }
    }
  ];

  const { desc } = await inquirer.prompt(question);

  return desc;
}

const allTaskToDelete = async (tasks = []) => {
    const choices = tasks.map((task, index) => {
      const idx = `${index + 1}. `.green;

      return {
        value: task.id,
        name: `${idx} ${task.description}`
      }
    });

    choices.unshift({
      value: '0',
      name: '0. '.green + 'Cancelar'
    });

    const questions = [
      {
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
      }
    ];

    const { id } = await inquirer.prompt(questions);

    return id;
}

const confirm = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    }
  ];

  const { ok } = await inquirer.prompt(question);

  return ok;
}

module.exports = {
  inquirerMenu,
  inquirerPause,
  readInput,
  allTaskToDelete,
  confirm
}
