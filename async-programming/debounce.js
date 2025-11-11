function debounce(func, delay = 300) {
  let timeoutId;
  return function(args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.call(this, args)
    }, delay);
  }
};

const testFunc = (text) => console.log(text);
const debFunc = debounce(testFunc, 500);

debFunc('Hi!');

