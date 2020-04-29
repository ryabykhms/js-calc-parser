class Token {
  constructor(type, text) {
    this._type = type;
    this._text = text;
  }


  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get text() {
    return this._text;
  }

  set text(value) {
    this._text = value;
  }
}

module.exports = { Token };