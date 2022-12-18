const fs = require('fs');
const text = "Hola mundo";

fs.writeFile('./file.txt', text, (err) => {
  if (err) throw err;
});