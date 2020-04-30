const { Lexer } = require('./src/parser/Lexer');
const { Parser } = require('./src/parser/Parser');

const lexer = new Lexer('(2.876+2)*2');

const parser = new Parser(lexer.tokenize());
const expressions = parser.parse();
expressions.forEach(expression => {
  console.log(expression + ' = ' + expression.evaluate());
});