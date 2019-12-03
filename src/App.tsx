import React from "react";
/////////
import "./css/normalise.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/kickstart.css";
import "./css/animate.css";
import "./css/mobile.css";
import "./css/desktop.css";
//
import iconTwiter from "./icons/twitter-brands.svg";
import Animations from "./utils/Animations";
import Colors from "./utils/Colors";
import F from "./utils/Functions";
import Quote from "./models/Quote";
import Quotes from "./utils/Quotes";

interface AppState {
  quote: Quote;
  color: string;
}

class App extends React.Component<{}, AppState, any> {
  private divQuoteContainer: any;

  constructor() {
    super({}, null);
    this.divQuoteContainer = React.createRef();
    this.state = {
      quote: Quotes.getQuote(),
      color: Colors.getColor()
    };
  }

  onclickNewQuote() {
    this.setState({ quote: Quotes.getQuote(), color: Colors.getColor() });
    F.animate(Animations.getAnimation(), this.divQuoteContainer.current, 1000);
  }

  render() {
    const { quote, color } = this.state;
    return (
      <main
        id="main"
        className="container flex-row-jcC-aiC h-100vh t1"
        style={{ backgroundColor: color }}
      >
        <div className="white-bg jumbotron">
          <div
            id="quote-container"
            className="quote-container"
            ref={this.divQuoteContainer}
          >
            <p id="quote" className="quote" style={{ color: color }}>
              <span>&quot;</span>
              <span id="quote-text">{quote.text}</span>
              <span>&quot;</span>
            </p>
            <label
              id="quote-author"
              className="flex-asE"
              style={{ color: color }}
            >
              {quote.author}
            </label>
          </div>
          <div className="flex-row-jcSB flex-aiC">
            <a
              id="tweet-quote"
              className="icon icon-m-square t1 p-03e"
              href={`https://twitter.com/intent/tweet?hashtags=quotes,PatMan10&related=freecodecamp&text="${quote.text}" - ${quote.author}`}
              rel="noopener noreferrer"
              style={{ backgroundColor: color }}
              target="_blank"
              title="Tweet this quote!"
            >
              <img className="full-img" src={iconTwiter} alt="Tweet" />
            </a>
            <input
              id="new-quote"
              className="btn btn-secondary t1"
              onClick={() => this.onclickNewQuote()}
              style={{ backgroundColor: color }}
              type="button"
              value="New Quote"
            />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
