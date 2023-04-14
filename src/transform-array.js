const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next duplicates the next element of the array in the transformed array.
// --double-prev duplicates the previous element of the array in the transformed array.

function transform(arr) {
  if (Array.isArray(arr)) {
    let newArr = arr;
    let flag = false;
    for (let i = 0; i < newArr.length; i++) {
      if (typeof newArr[i] === 'string') {
        switch (newArr[i]) {
          case '--discard-next':
            if (i != newArr.length - 1) {
              if(typeof newArr[i + 1] === 'number' || newArr[i - 1] === null) newArr.splice(i, 2, null);
              else if(typeof newArr[i + 1] === 'string') flag = true;
              i--;
            }
            else{
              newArr.splice(i, 1);
            }
            break;
          case '--discard-prev':
            if (i != 0) {
              if(typeof newArr[i - 1] === 'number' || newArr[i - 1] === null) newArr.splice(i - 1, 2, null);
              else if(typeof newArr[i - 1] === 'string') flag = true;
              i--;
            }
            else{
              newArr.splice(i, 1);
            }
            break;
          case '--double-next':
            if (i != newArr.length - 1) {
              if(typeof newArr[i + 1] === 'number' || newArr[i - 1] === null) newArr.splice(i, 1, newArr[i + 1]);
              else if(typeof newArr[i + 1] === 'string') flag = true;
            }
            else{
              newArr.splice(i, 1);
            }
            break;
          case '--double-prev':
            if (i != 0) {
              if(typeof newArr[i - 1] === 'number' || newArr[i - 1] === null) newArr.splice(i, 1, newArr[i - 1]);
              else if(typeof newArr[i - 1] === 'string') flag = true;
            }
            else{
              newArr.splice(i, 1);
            }
            break;
          default:
            flag = true;
        }
      }
    }
    newArr = newArr.filter((obj) => { return obj != null});
    if(!flag) return newArr;
    else return arr;
  }
  else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};

const cases = [
  [ '--double-prev', '1' ],
  ['--double-prev', 1, 2, 3],
  [1, 2, 3, '--double-next'],
  [1, 2, 3, '--discard-next']
];

cases.forEach(currCase => {
  transform(currCase);
});