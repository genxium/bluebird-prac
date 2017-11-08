const Promise = require('bluebird');

const elements = [1, 2, 3, 4, 5, 6, 7]; 

let initialAcc = 0;

const onEach = function(previousAcc, currentElement) {
  /*
  * You'll get previousAcc = 1, 3, 6, 10, 15, ..., because the reducer is merely doing "plus" arithmetic ops. 
  */
  console.log("Previous acc = " + previousAcc);
  return (previousAcc + currentElement);
};

const onFinished = function(resultedAcc) {
  console.log("");
  console.log("Resulted acc = " + resultedAcc);
  console.log("While the variable initialAcc is still " + initialAcc);
};

Promise.reduce(elements, onEach, initialAcc)
.then(onFinished);

/**
// Or, using the anonymous func version.

Promise.reduce(elements, function(previousAcc, currentElement) {
  console.log("Previous acc = " + previousAcc);
  return (previousAcc + currentElement);
}, 0)
.then(function(resultedAcc) {
  console.log("");
  console.log("Resulted acc = " + resultedAcc);
});
*/

/*
// Or, using the lambda func version.
Promise.reduce(elements, (previousAcc, currentElement) => {
  console.log("Previous acc = " + previousAcc);
  return (previousAcc + currentElement);
}, 0)
.then((resultedAcc) => {
  console.log("");
  console.log("Resulted acc = " + resultedAcc);
});
*/
