const alwaysThrows = () => {
  throw new Error('OH NOES');
};

const iterate = (number) => {
  console.log(number);
  return number + 1;
};

const wrapper = (callback) => {


};


module.exports = { alwaysThrows, wrapper, iterate };
