var pluralise = require('./pluralise.js');

console.log("0 " + pluralise(0, 'cow'));
console.log("1 " + pluralise(1, 'cow'));
console.log("2 " + pluralise(2, 'cow'));

console.log("0 " + pluralise(0, 'sheep', 'sheep'));
console.log("1 " + pluralise(1, 'sheep', 'sheep'));
console.log("2 " + pluralise(2, 'sheep', 'sheep'));

console.log("0 " + pluralise(0, 'pony', 'ponies'));
console.log("1 " + pluralise(1, 'pony', 'ponies'));
console.log("2 " + pluralise(2, 'pony', 'ponies'));
