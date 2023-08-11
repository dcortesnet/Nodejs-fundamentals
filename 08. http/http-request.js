const http = require("http");

const port = 3000;

const server = http.createServer((request, response) => {
  const ip = request.socket.remoteAddress;
  const url = request.url;
  const headers = request.headers;
  const cookies = request.headers?.cookie;

  console.log(ip);
  console.log(url);
  console.log(headers);
  console.log(cookies);

  response.end();
});

server.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});