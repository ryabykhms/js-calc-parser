const { Expression } = require('./Expression');

class UnaryExpression extends Expression {
  constructor(operation, expression) {
    super();
    this.operation = operation;
    this.expression = expression;
  }

  evaluate() {
    switch (this.operation) {
      case '-':
        return -this.expression.evaluate();
      case '+':
      default:
        return this.expression.evaluate();
    }
  }

  toString() {
    return this.operation + ' ' + this.expression;
  }
}

module.exports = { UnaryExpression };