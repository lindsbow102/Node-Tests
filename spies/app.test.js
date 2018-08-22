const expect = require('expect');
const rewire = require('rewire'); // rewire is now used in place of require

// Rewire loads two new methods: app.__get__ and app.__set__
const app = rewire('./app');

describe('App', () => {

    const db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db); // Replacing the real db w/ our db variable above

    it('should call the spy correctly', () => {
        const spy = expect.createSpy();
        spy('Lindsey', 38);
        expect(spy).toHaveBeenCalledWith('Lindsey', 38);
    });

    it('should call saveUser with user object', () => {
        const email = 'lindsey@example.com';
        const password = '123abc';

        app.handleSignup(email, password);

        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
});