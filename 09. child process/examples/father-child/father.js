const { fork } = require('child_process');

const subProcess = fork("./child.js");

subProcess.on('message', (message) => {
  console.log(`I get this from the son : ${message}`);
});