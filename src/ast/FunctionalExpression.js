const {Expression} = require('./Expression');
const {Functions} = require('../lib/Functions');

class FunctionalExpression extends Expression {
  constructor(name, args) {
    super();
    this.name = name;
    this.args = args === undefined ? [] : args;
  }

  addArgument(arg) {
    this.args.push(arg);
  }

  evaluate() {
    const size = this.args.length;
    const values = [];
    for (let i = 0; i < size; i++) {
      values[i] = this.args[i].evaluate();
    }
    const func = Functions.get(this.name);
    return func(values);
  }

  toString() {
    return this.name + ' [' + this.args + ']';
  }
}

module.exports = {FunctionalExpression};