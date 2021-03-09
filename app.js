require('colors');
const { inquirerMenu, inquirerPause } = require('./helpers/inquirer');

const main = async () => {
  console.clear();
  console.log('Hola Mundo');

  let opt = '';

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    await inquirerPause();

  } while (opt !== '0');
}

main();
