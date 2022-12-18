const { Buffer } = require('buffer');
const buf6 = Buffer.from('hello');

console.log(buf6);

// <Buffer 68 65 6c 6c 6f >
// [0x68, 0x65, 0x6c, 0x6c, 0x6f] 
// (hexadecimal notation)

const text = buf6.toString();
console.log(text);

// hello