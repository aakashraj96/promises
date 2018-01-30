const promiseFunction = require('./index');

describe('Testing async function call using promises', () => {
  test('Calling async function, expecting FULFILLED!', () =>
    // expect.assertions(1);
    promiseFunction().then((data) => {
      expect(data).toBe('FULFILLED!');
    }));
});

describe('Checking if return type is a promise object', () => {
  test('Calling async function, expecting Promise { <pending> }', () =>
    // expect.assertions(1);
    expect(promiseFunction().toString()).toBe('[object Promise]'));
});
