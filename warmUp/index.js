// setTimeout(() => { console.log('TIMED OUT!'); }, 300);

const asyncFunction = (callback) => {
  setTimeout(() => { callback('TIMED OUT!'); }, 300);
};

module.exports = asyncFunction;
