class Quote {
  constructor(
    private _author: string = "Anonymous",
    private _text: string = "Quote unknown."
  ) {}

  get author() {
    return this._author;
  }

  set author(a) {
    this._author = a;
  }

  get text() {
    return this._text;
  }

  set text(b) {
    this._text = b;
  }
}

export default Quote;
