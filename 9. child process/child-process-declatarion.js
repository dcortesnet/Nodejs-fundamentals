const { exec } = require('child_process');
const os = require('os');

const platform = os.platform()
const url = "https://www.youtube.com/";
let cmdCommand;

if (platform === "win32") {
  cmdCommand = `start chrome /new-tab ${url}`;
} else {
  cmdCommand = `open -na 'Google Chrome' --args --new-window ${url}`;
}

exec(cmdCommand);