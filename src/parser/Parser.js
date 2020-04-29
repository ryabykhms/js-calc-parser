/**
 * Class Parser accepts a list of tokens and the expression is output.
 */
const { Token } = require('./Token');
const { TokenType } = require('./TokenType');
const { BinaryExpression } = require('../ast/BinaryExpression');
const { NumberExpression } = require('../ast/NumberExpression');
const { UnaryExpression } = require('../ast/UnaryExpression');

class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.pos = 0;
    this.length = tokens.length;
    this.EOF = new Token(TokenType.EOF, '');
  }

  parse() {
    const result = [];
    while (!this.match(TokenType.EOF)) {
      result.push(this.expression());
    }
    return result;
  }

  expression() {
    return this.additive();
  }

  additive() {
    let result = this.multiplicative();
    while (true) {
      if (this.match(TokenType.PLUS)) {
        result =  new BinaryExpression('+', result, this.multiplicative());
        continue;
      }
      if (this.match(TokenType.MINUS)) {
        result = new BinaryExpression('-', result, this.multiplicative());
        continue;
      }
      break;
    }
    return result;
  }

  multiplicative() {
    let result = this.unary();
    while (true) {
      if (this.match(TokenType.STAR)) {
        result =  new BinaryExpression('*', result, this.unary());
        continue;
      }
      if (this.match(TokenType.SLASH)) {
        result = new BinaryExpression('/', result, this.unary());
        continue;
      }
      break;
    }
    return result;
  }

  unary() {
    if (this.match(TokenType.MINUS)) {
      return new UnaryExpression('-', this.primary());
    }
    if (this.match(TokenType.PLUS)) {
      return this.primary();
    }
    return this.primary();
  }

  primary() {
    const current = this.get(0).text;
    if (this.match(TokenType.NUMBER)) {
      return new NumberExpression(parseInt(current));
    }
    if (this.match(TokenType.HEX_NUMBER)) {
      return new NumberExpression(parseInt(current, 16));
    }
    if (this.match(TokenType.LPAREN)) {
      const result = this.expression();
      this.match(TokenType.RPAREN);
      return result;
    }
    throw new Error('Unknown expression');
  }

  match(type) {
    const current = this.get(0);
    if (type !== current.type) return false;
    this.pos++;
    return true;
  }

  get(relativePosition) {
    const position = this.pos + relativePosition;
    if (position >= this.length) return this.EOF;
    return this.tokens[position];
  }
}

module.exports = { Parser };