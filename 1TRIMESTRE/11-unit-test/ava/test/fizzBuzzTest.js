const fizzBuzzObject = require('../src/fizzBuzzObject');
const test = require('ava');

const object = {
    2: 'poo',
    3: 'fizz',
    5: 'buzz',
    15: 'foo'
};

test('Should return poo', t => {
    const result = fizzBuzzObject(2,object);
     t.is(result, 'poo');
     });

 test('Should return fizz', t => {
     const result = fizzBuzzObject(3,object);
     t.is(result, 'fizz');
     });

 test('Should return buzz', t => {
     const result = fizzBuzzObject(5,object);
     t.is(result, 'buzz');
     });

 test('Should return fizzbuzzfoo', t => {
     const result = fizzBuzzObject(15,object);
     t.is(result, 'fizzbuzzfoo');
     });