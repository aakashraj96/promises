const promiseFunction = require('./index');

describe('Testing async function call using promises', () => {
  test('Calling async function, expecting I FIRED', () => {
    // expect.assertions(1);
    promiseFunction().then((data) => {
      expect(data).toBe('I FIRED');
    });
  });
});
