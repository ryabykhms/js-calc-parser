class Functions {

  static functions = {
    // trigonometric
    sin: args => Functions.execFunction(Math.sin, args),
    cos: args => Functions.execFunction(Math.cos, args),
    tg: args => Functions.execFunction(Math.tan, args),
    ctg: args => Functions.execFunction(Functions.ctg, args),
    asin: args => Functions.execFunction(Math.asin, args),
    acos: args => Functions.execFunction(Math.acos, args),
    atan: args => Functions.execFunction(Math.atan, args),
    asinh: args => Functions.execFunction(Math.asinh, args),
    acosh: args => Functions.execFunction(Math.acosh, args),
    atanh: args => Functions.execFunction(Math.atanh, args),
    atan2: args => Functions.execFunction(Math.atan2, args),
    // logarithmic
    sqrt: args => Functions.execFunction(Math.sqrt, args),
    cbrt: args => Functions.execFunction(Math.cbrt, args),
    exp: args => Functions.execFunction(Math.exp, args),
    ln: args => Functions.execFunction(Math.log, args),
    log10: args => Functions.execFunction(Math.log10, args),
    log2: args => Functions.execFunction(Math.log2, args),
    pow: args => Functions.execFunction(Math.pow, args),
    // other
    fact: args => Functions.execFunction(Functions.fact, args),
    percent: args => Functions.execFunction(Functions.percent, args),
  };

  static percent(x, y) {
    return (x/100)*y;
  }

  static fact(x) {
    let value=1;
    for (let i = 2; i <= x; i++)
      value = value * i;
    return value;
  }

  static ctg(x) {
    return 1 / Math.tan(x);
  }

  static execFunction(func, args) {
    return func(...args);
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