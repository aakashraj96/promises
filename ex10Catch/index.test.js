const testfun = require('./index.js');


describe('Testing testfun', () => {
  test('Passing 1, expecting 2', () => {
    expect(testfun.iterate(1)).toEqual(2);
  });
});

describe('Testing alwaysThrows', () => {
  test('expecting error', () => {
    try {
      testfun.alwaysThrows();
    } catch (err) {
      expect(err.message).toEqual('OH NOES');
    }
  });
});

describe('Testing wrapper', () => {
  test('Expecting 12345OH NOES', (done) => {
    const callback = (data) => {
      expect(data).toEqual('12345OH NOES');
      done();
    };
    testfun.wrapper(callback);
  });
});
