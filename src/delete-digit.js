const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n);
  let res = n.slice(0, n.length - 1);
  for(let i = 1; i < n.length; i++){
    let sl = n.substr(0, i - 1) + n.substr(i, n.length);
    if(sl > res){
      res = sl;
    }
  }
  return parseInt(res);
}

module.exports = {
  deleteDigit
};
