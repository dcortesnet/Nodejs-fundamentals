const fs = require('fs');

try {
  fs.unlinkSync('./file.txt');
} catch (err) {
  throw err;
}