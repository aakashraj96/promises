
//
// promise.then((fulfilled) => {
//   console.log(fulfilled);
// }, (rejected) => {
//   console.log(rejected.message);
// });


const promiseFunction = () => {
  const promise = new Promise((fulfill, reject) => {
    const fulfillFunction = () => {
      fulfill('FULFILLED!');
    };

    const rejectFunction = () => {
      reject(Error('REJECTED!'));
    };
    setTimeout(rejectFunction, 300);
  });
  return promise;
};

module.exports = promiseFunction;
