const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    const res = utils.add(3,15);
    expect(res)
        .toBeA('number')
        .toBe(18);
    
    // if (res !== 18) {
    //     throw new Error(`Expected 18, but got ${res}.`)
    // }
});

it('should return the square of a number', () => {
    const res = utils.square(9);

    expect(res)
        .toBeA('number')
        .toBe(81);
});

// it('should expect some values', () => {
//     //expect(12).toNotBe(11); 
    
//     //toBe and notToBe does not work with arrays or objects but DOES work for numbers/strings/booleans

//     //expect({ name: 'Lindsey' }).toEqual({ name: 'Lindsey' });
//     //expect([2,3,4,5]).toInclude(5);  expect([2,3,4]).toExclude(1);

//     expect({
//         name: 'Lindsey',
//         age: 38,
//         location: 'Gilbert'
//     }).toInclude({ location: 'Gilbert' });

// });

it('should verify first and last names are set', () => {
    const user = {
        age: 38,
        location: 'Gilbert'
    };
    const res = utils.setName(user, 'Lindsey Bowen');
    expect(user).toEqual(res);
    expect(res).toInclude({
        firstName: 'Lindsey',
        lastName: 'Bowen'
    })
});

// nodemon --exec 'npm test' (use double quotes for windows)