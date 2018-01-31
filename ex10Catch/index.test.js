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
