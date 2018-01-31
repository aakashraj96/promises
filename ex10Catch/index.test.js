const testfun = require('./index.js');

describe('Testing catch', () => {
  test('', (done) => {
    const callback = (data) => {
      expect(data).toEqual('');
      done();
    };
    testFun(callback);
  });
});
