//
// promise.then((reason) => {
//   console.log(reason);
// }, (reason) => {
//   console.log(reason.message);
// });

const promiseFunction = () => {
  const promise = new Promise((fulfill, reject) => {
    fulfill('I FIRED');
    reject(Error('I DID NOT FIRE'));
  });

  return promise;
};
module.exports = promiseFunction;
