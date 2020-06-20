class Constants {
  static constants = {
    PI: Math.PI,
    E: Math.E,
    LN2: Math.LN2,
    LN10: Math.LN10,
    LOG2E: Math.LOG2E,
    LOG10E: Math.LOG10E
  };

  static isExists(key) {
    return Constants.constants.hasOwnProperty(key.toUpperCase());
  }

  static get(key) {
    if (!this.isExists(key)) {
      return 0;
    } else {
      return Constants.constants[key.toUpperCase()];
    }
  }
}

module.exports = {Constants};