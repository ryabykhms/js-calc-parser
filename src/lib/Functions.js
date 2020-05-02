class Functions {

  static functions = {
    sin: args => Functions.oneArgFunction(Math.sin, args),
    cos: args => Functions.oneArgFunction(Math.cos, args),
    tg: args => Functions.oneArgFunction(Math.tan, args),
    ctg: args => Functions.oneArgFunction(this.ctg, args),
    asin: args => Functions.oneArgFunction(Math.asin, args),
    acos: args => Functions.oneArgFunction(Math.acos, args),
    atan: args => Functions.oneArgFunction(Math.atan, args),
    asinh: args => Functions.oneArgFunction(Math.asinh, args),
    acosh: args => Functions.oneArgFunction(Math.acosh, args),
    atanh: args => Functions.oneArgFunction(Math.atanh, args),
    atan2: args => Functions.twoArgFunction(Math.atan2, args),
  };

  static ctg(args) {
    return 1 / Math.tan(args);
  }

  static oneArgFunction(func, args) {
    if (args.length !== 1) {
      throw new Error('One args expected');
    }
    return func(args);
  }

  static twoArgFunction(func, args) {
    if (args.length !== 2) {
      throw new Error('Two args expected');
    }
    return func(args);
  }

  static isExists(key) {
    return Functions.functions.hasOwnProperty(key);
  }

  static get(key) {
    if (!this.isExists(key)) {
      throw new Error('Unknown function ' + key);
    } else {
      return Functions.functions[key];
    }
  }

  static set(key, value) {
    Functions.functions[key] = value;
  }
}

module.exports = {Functions};