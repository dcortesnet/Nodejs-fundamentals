const { spawn } = require('child_process');

const subProcess = spawn("find", ["."]);

subProcess.stdout.on('data', (data) => {
  console.log(`stdout:\n${data}`);
});

subProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

subProcess.on('error', (error) => {
  console.error(`error: ${error.message}`);
});

subProcess.on('close', (code) => {
  console.log(`child process salida ${code}`);
});