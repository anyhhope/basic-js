const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = new Object();
  for (el of domains) {
    let arr = el.split('.').reverse();
    let dom = '.' + arr[0];
    if (!(dom in res)) res[dom] = 1;
    else res[dom] += 1;
    for (let i = 1; i < arr.length; i++) {
      dom += '.' + arr[i];
      if (!(dom in res)) res[dom] = 1;
      else res[dom] += 1;
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};


getDNSStats(['epam.com', 'info.epam.com'])