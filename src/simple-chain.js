const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    const newObj = { ...this };
    newObj.chains = [...this.chains, `( ${value} )`];
    return newObj;
  },
  removeLink(position) {
    const newObj = { ...this };
    let newChainArray = [...this.chains];
    if (position >= 1 && position <= newChainArray.length) {
      newChainArray.splice(position - 1, 1);
      newObj.chains = newChainArray;
      return newObj;
    } else {
      throw new Error();
    }
  },
  reverseChain() {
    const newObj = { ...this };
    newObj.chains = [...this.chains].reverse();
    return newObj;
  },
  finishChain() {
    return this.chains.join("~~");
  }
};

module.exports = chainMaker;
