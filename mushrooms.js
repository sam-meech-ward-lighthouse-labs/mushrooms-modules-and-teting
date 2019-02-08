// import { say } from 'cowsay';
var cowsay = require('cowsay');
var eatMushrooms = require('./eatMushrooms.js');

// user facing code
var text = eatMushrooms(process.argv[2]);
console.log(cowsay.say({
  text: text, 
  eyes: 'pp',
  tongue: ';;'
}));