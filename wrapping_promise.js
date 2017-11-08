const Promise = require('bluebird');

const elements = [1, 2, 3, 4, 5, 6, 7]; 

let initialAcc = 0;

// Hereby only the anonymous func version is presented.

Promise.reduce(elements, function(previousAcc, currentElement) {
  console.log("Previous acc = " + previousAcc);
  return new Promise(function(resolve, reject) {
    // Meaningless promise.
    resolve(previousAcc); 
  })
  .then(function(r) {
    return new Promise(function(resolve, reject) {
      // Meaningless promise.
      resolve(r); 
    });
  })
  .then(function(r) {
    // Remember to returns just a value instead of a "Promise" at the end of each promise chain.
    return (r + currentElement);
  });
}, 0)
.then(function(resultedAcc) {
  console.log("");
  console.log("Resulted acc = " + resultedAcc);
});
