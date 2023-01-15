const http = require("http");

const port = 3000;

const server = http.createServer((request, response) => {
  response.setHeader();
  response.end();
});

server.listen(port, () => {
  console.log(`Server listens on port ${port}`);
})