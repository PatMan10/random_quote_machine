//-------------CSS----------------
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@patman10/kickstart.css/dist/kickstart.min.css";
import "animate.css/animate.min.css";
import "./css/mobile.css";
import "./css/desktop.css";
//-------------LIBS----------------
import React from "react";
//-------------ICONS----------------
import iconTwiter from "./assests/icons/twitter-brands.svg";
//-------------MODELS----------------
import Quote from "./models/Quote";
//-------------UTILS----------------
import Animations from "./utils/Animations";
import Colors from "./utils/Colors";
import F from "./utils/Functions";
import Quotes from "./utils/Quotes";

interface Props {}

interface State {
  quote: Quote;
  color: string;
}

class App extends React.Component<Props, State> {
  private divQuoteContainer: any;

  constructor(props: Props) {
    super(props);
    this.divQuoteContainer = React.createRef();
    this.state = {
      quote: Quotes.getQuote(),
      color: Colors.getColor()
    };
  }

  newQuote = () => {
    this.setState({ quote: Quotes.getQuote(), color: Colors.getColor() });
    F.animate(Animations.getAnimation(), this.divQuoteContainer.current, 1000);
  };

  render() {
    const { quote, color } = this.state;
    return (
      <main
        id="main"
        className="container flex-row-aiC-jcC h-100vh t1"
        style={{ backgroundColor: color }}
      >
        <div className="white-bg jumbotron">
          <div
            id="quote-container"
            className="flex-col"
            ref={this.divQuoteContainer}
          >
            <p id="quote" style={{ color: color }}>
              <span>&quot;</span>
              <span id="quote-text">{quote.text}</span>
              <span>&quot;</span>
            </p>
            <label
              id="quote-author"
              className="flex-asE"
              style={{ color: color }}
            >
              - {quote.author}
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
              onClick={this.newQuote}
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
