const { Lexer } = require('./src/parser/Lexer');
const { Parser } = require('./src/parser/Parser');

class Calc {
  calculate(stringExpression) {
    const lexer = new Lexer(stringExpression);
    const tokens = lexer.tokenize();
    const parser = new Parser(tokens);
    const expressions = parser.parse();
    let result = '';
    expressions.forEach(expression => {
      result = expression.evaluate();
    });
    return result;
  }
}

module.exports = { Calc };