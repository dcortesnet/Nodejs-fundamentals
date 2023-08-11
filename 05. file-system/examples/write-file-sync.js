const fs = require('fs');
const text = "Hola mundo";

try {
  fs.writeFileSync('./file.txt', text);
} catch (err) {
  throw err;
}