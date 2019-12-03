class Constants {
  readonly mainId: string;
  readonly newQuoteId: string;
  readonly quoteId: string;
  readonly quoteAuthorId: string;
  readonly quoteBodyId: string;
  readonly quoteContainerId: string;
  readonly tweetQuoteId: string;

  constructor() {
    this.mainId = "main";
    this.newQuoteId = "new-quote";
    this.quoteId = "quote";
    this.quoteAuthorId = "quote-author";
    this.quoteBodyId = "quote-body";
    this.quoteContainerId = "quote-container";
    this.tweetQuoteId = "tweet-quote";
  }
}

export default new Constants();
