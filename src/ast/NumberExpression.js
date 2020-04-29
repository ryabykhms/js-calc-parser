const { Expression } = require('./Expression');

class NumberExpression extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }

  evaluate() {
    return this.value;
  }

  toString() {
    return this.value.toString();
  }
}

module.exports = { NumberExpression };