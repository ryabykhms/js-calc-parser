const TokenType = {
  NUMBER: 'NUMBER',
  HEX_NUMBER: 'HEX_NUMBER',
  WORD: 'WORD',

  PLUS: 'PLUS',
  MINUS: 'MINUS',
  STAR: 'STAR',
  SLASH: 'SLASH',

  LPAREN: 'LPAREN',
  RPAREN: 'RPAREN',
  COMMA: 'COMMA',

  FACT: 'FACT',
  POW: 'POW',
  PERCENT: 'PERCENT',

  EOF: 'EOF',
};

module.exports = { TokenType };