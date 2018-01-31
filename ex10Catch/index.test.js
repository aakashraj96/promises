const testfun = require('./index.js');

// describe('Testing catch', () => {
//   test('', (done) => {
//     const callback = (data) => {
//       expect(data).toEqual('');
//       done();
//     };
//     testFun(callback);
//   });
// });

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
