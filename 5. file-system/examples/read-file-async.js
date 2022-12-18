const fs = require('fs');

fs.readFile('./hello.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) throw err;
  console.log(data);
});