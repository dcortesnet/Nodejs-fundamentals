const fs = require('fs');

try {
  const data = fs.readFileSync('./hello.txt', { encoding: "utf-8" });
  console.log(data);
} catch (err) {
  throw err;
}