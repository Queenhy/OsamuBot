const { characters } = require("./characters.json");

class HottieGenerator {
  constructor() {
    this.#lastCharNum = -1;
    this.#lastCharNums = [];
  }

  #lastCharNum;
  #lastCharNums;

  getRandomHottie() {
    return characters[this.#getNextRandom()];
  }

  #getNextRandom() {
    if (this.#lastCharNums.length === characters.length) {
      this.#lastCharNums = [];
    }

    const randCharNum = Math.floor(Math.random() * characters.length);
    if (
      this.#lastCharNums.includes(randCharNum) ||
      this.#lastCharNum === randCharNum
    ) {
      return this.#getNextRandom();
    }

    this.#lastCharNum = randCharNum;
    this.#lastCharNums.push(randCharNum);

    return randCharNum;
  }
}

module.exports = { HottieGenerator };
