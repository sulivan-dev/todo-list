const fs = require('fs');

const file = './db/data.json';

const saveRegister = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
}

const readRegister = () => {
  if (!fs.existsSync(file)) return null;

  const info = fs.readFileSync(file, { encoding: 'utf-8' });
  const data = JSON.parse(info);

  console.log(data);
  return data;
}

module.exports = {
  saveRegister,
  readRegister
}
