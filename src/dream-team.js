const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(data) {
  if(Array.isArray(data)){
    let letters = data.filter((obj) => { return typeof obj === 'string'}).map(item => item.replace(/ /g, "").slice(0, 1).toUpperCase());
    let result = letters.sort().join('');
    return result;
  }
  else{
    return false;
  }

}

module.exports = {
  createDreamTeam
};