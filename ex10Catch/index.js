let result = '';
const alwaysThrows = () => {
  throw new Error('OH NOES');
};

const iterate = (number) => {
  console.log(number);
  result += number;
  return number + 1;
};

const errorHandler = (err) => {
  console.log(err.message);
  result += err.message;
};
const wrapper = (callback) => {
  result = '';
  Promise.resolve(1).then(iterate).then(iterate).then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(errorHandler)
    .then((data) => { callback(result); });
};

wrapper();

module.exports = { alwaysThrows, wrapper, iterate };
