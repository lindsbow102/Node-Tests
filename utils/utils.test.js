const utils = require('./utils');

it('should add two numbers', () => {
    const res = utils.add(3,15);
    
    if (res !== 18) {
        throw new Error(`Expected 18, but got ${res}.`)
    }
});

it('should return the square of a number', () => {
    const res = utils.square(9);

    if(res !== 81) {
        throw new Error(`Expected 81, but got ${res}.`);
    }
});