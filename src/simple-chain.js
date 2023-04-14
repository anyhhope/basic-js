const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!this.chain) {
      this.chain = [];
      this.chain.push(String(value));
    }
    else {
      this.chain.push(String(value));
    }
    return this;
  },
  removeLink(ind) {
    if (isNaN(ind) || ind <= 0 || ind > this.chain.length) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    else this.chain.splice(ind - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainStr = '';
    for (el of this.chain) {
      chainStr += `( ${el} )~~`;
    }
    chainStr = chainStr.slice(0, chainStr.length - 2);
    this.chain = [];
    return chainStr;
  }
};

module.exports = {
  chainMaker
};

let res = chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain();
console.log(res);

