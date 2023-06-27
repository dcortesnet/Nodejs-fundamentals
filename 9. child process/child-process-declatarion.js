const { exec } = require('child_process');

url = "https://www.youtube.com/";
cmdCommand = `start chrome /new-tab ${url}`;
exec(cmdCommand);