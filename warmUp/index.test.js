const asyncFunction = require('./index');

describe('Testing async function call', () => {
  test('Calling async function, expecting TIMED OUT!', (done) => {
    function callback(data) {
      expect(data).toBe('TIMED OUT!');
      done();
    }
    asyncFunction(callback);
  });
});
