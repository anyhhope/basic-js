const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let cnt = 0;
  s1 = Array.from(str1);
  s2 = Array.from(str2);
  for(let i = 0; i < s1.length; i++){
    if(s2.includes(s1[i])){
      cnt++;
      s2.splice(s2.indexOf(s1[i]), 1);
    }
  }
  return cnt;
}

module.exports = {
  getCommonCharacterCount
};
