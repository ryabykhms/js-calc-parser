const { Lexer } = require('./src/parser/Lexer');
const { Parser } = require('./src/parser/Parser');

// const input = '(E+2.876+2)*2';
const input = 'pow(2,2)';
const lexer = new Lexer(input);
const tokens = lexer.tokenize();
console.log(tokens);

const parser = new Parser(tokens);
const expressions = parser.parse();
expressions.forEach(expression => {
  console.log(expression + ' = ' + expression.evaluate());
});