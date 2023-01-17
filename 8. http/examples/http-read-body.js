const http = require("http");

const port = 3000;

const server = http.createServer((request, response) => {
  let body = [];

  request.on('data', (chunk) => {
    body.push(chunk);
  });

  request.on('end', () => {
    body = Buffer.concat(body).toString();
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ body }));
  });

});

server.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});