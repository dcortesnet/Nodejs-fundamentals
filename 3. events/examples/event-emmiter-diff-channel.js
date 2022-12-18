const event = require('events');
class Dog extends event.EventEmitter { }
class Cat extends event.EventEmitter { }

const cat = new Cat();
const dog = new Dog();

dog.on('bark', () => {
  console.log('Woof! Woof!');
});

cat.on('bark', () => {
  console.log('Meow! Meow!');
});

dog.emit('bark');