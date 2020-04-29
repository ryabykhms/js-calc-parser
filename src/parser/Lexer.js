const { Token } = require('./Token');
const { TokenType } = require('./TokenType');

/**
 * Class Lexer takes a string as input and returns a list of tokens
 */
class Lexer {

  static OPERATOR_CHARS = "+-*/()";
  static OPERATOR_TOKENS = [
    TokenType.PLUS, TokenType.MINUS,
    TokenType.STAR, TokenType.SLASH,
    TokenType.LPAREN, TokenType.RPAREN
  ];
  constructor(input) {
    this.input = input;
    this.tokens = [];
    this.pos = 0;
    this.length = input.length;
  }

  tokenize() {
    while(this.pos < this.length) {
      const current = this.peek(0);
      if (Number.isFinite(parseFloat(current))) this.tokenizeNumber();
      else if (current === '#') {
        this.next();
        this.tokenizeHexNumber();
      }
      else if (Lexer.OPERATOR_CHARS.indexOf(current) !== -1) {
        this.tokenizeOperator();
      } else {
        this.next();
      }
    }
    return this.tokens;
  }

  tokenizeNumber() {
    let buffer = '';
    let current = this.peek(0);
    while (Number.isFinite(parseFloat(current))) {
      buffer += current;
      current = this.next();
    }
    this.addTokenWithText(TokenType.NUMBER, buffer);
  }

  tokenizeHexNumber() {
    let buffer = '';
    let current = this.peek(0);
    while (Number.isFinite(parseFloat(current)) || this.isHexNumber(current)) {
      buffer += current;
      current = this.next();
    }
    this.addTokenWithText(TokenType.HEX_NUMBER, buffer);
  }

  isHexNumber(current) {
    return 'abcdef'.indexOf(current.toLowerCase()) !== -1;
  }

  tokenizeOperator() {
    const position = Lexer.OPERATOR_CHARS.indexOf(this.peek(0));
    this.addToken(Lexer.OPERATOR_TOKENS[position]);
    this.next();
  }

  addToken(type) {
    this.addTokenWithText(type, '');
  }

  addTokenWithText(type, text) {
    this.tokens.push(new Token(type, text));
  }

  next() {
    this.pos++;
    return this.peek(0);
  }

  peek(relativePosition) {
    const position = this.pos + relativePosition;
    if (position >= this.length) return '\0';
    return this.input.charAt(position);
  }
}

module.exports = { Lexer };