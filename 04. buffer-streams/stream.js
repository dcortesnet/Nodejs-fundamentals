const Stream = require('stream');
const readableStream = new Stream.Readable();

readableStream.push('Hello');
readableStream.push(' ');
readableStream.push('World');
readableStream.push(null);

async function getContentReadStream(readable) {
  for await (const chunk of readable) {
    console.log(chunk);
    console.log(chunk.toString());
  }
}

getContentReadStream(readableStream);
// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
// Hello World
