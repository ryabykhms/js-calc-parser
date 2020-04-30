const { Expression } = require('./Expression');
const { Constants } = require('../lib/Constants');

class ConstantExpression extends Expression {
  constructor(name) {
    super();
    this.name = name;
  }

  evaluate() {
    if (!Constants.isExists(this.name)) {
      throw new Error('Constant does not exists');
    }
    return Constants.get(this.name);
  }

  toString() {
    return this.name + ' [' + Constants.get(this.name) + ']';
  }
}

module.exports = { ConstantExpression };