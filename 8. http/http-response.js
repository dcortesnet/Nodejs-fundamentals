const http = require("http");

const port = 3000;

const server = http.createServer((request, response) => {
  const users = [
    { name: 'Diego', age: 27 },
    { name: 'Franco', age: 24 }
  ]
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(users));
});

server.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});