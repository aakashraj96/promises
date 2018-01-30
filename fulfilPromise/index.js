// const promise = new Promise((fulfill, reject) => {
//   const fulfillFunction = () => {
//     fulfill('FULFILLED!');
//   };
//   setTimeout(fulfillFunction, 300);
// });
//
// promise.then((fulfilled) => {
//   console.log(fulfilled);
// });


const promiseFunction = () => {
  const promise = new Promise((fulfill, reject) => {
    const fulfillFunction = () => {
      fulfill('FULFILLED!');
    };
    setTimeout(fulfillFunction, 300);
  });
  return promise;
};


module.exports = promiseFunction;
