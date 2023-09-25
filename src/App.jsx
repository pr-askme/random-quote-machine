import { useState } from "react";

import "./App.css";

const QUOTESDATA = [
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    text: "Life is what happens when you are busy making other plans.",
    author: "John Lennon",
  },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    text: "Life is what happens when you are busy making other plans.",
    author: "John Lennon",
  },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
];

const colorArray = [
  "#FF6633",
  "#FF33FF",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

function App() {
  const [randomIndex, setRandomIndex] = useState(0);

  let randomQuote = QUOTESDATA[randomIndex]["text"];
  let randomAuthor = QUOTESDATA[randomIndex]["author"];
  let randomColorStyle = { color: `${colorArray[randomIndex]}` };

  let tweetQuote = randomQuote.split(" ").join("%20");
  let tweetAuthor = randomAuthor.split(" ").join("%20");
  let twitterLink =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22" +
    tweetQuote +
    "%22%20" +
    tweetAuthor;
  let quote = randomQuote + " -" + randomAuthor;

  let copyQuote = async () => {
    try {
      await navigator.clipboard.writeText(quote);
      alert("Content copied to clipboard");
    } catch (err) {
      alert("Failed to copy: ", err);
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ backgroundColor: `${colorArray[randomIndex]}` }}
    >
      <div className="card text-center">
        <div className="card-body" style={randomColorStyle}>
          <h3 className="card-title">
            <i className="fa fa-quote-left"> </i> {randomQuote}
          </h3>
          <p className="card-text">- {randomAuthor}</p>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() =>
              setRandomIndex(Math.floor(Math.random() * QUOTESDATA.length))
            }
            style={{ backgroundColor: `${colorArray[randomIndex]}` }}
          >
            Generate new Quote!
          </a>
        </div>
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                id="tweet-quote"
                href={twitterLink}
                rel="noreferrer"
              >
                <i className="fa fa-twitter fa-lg" style={randomColorStyle}></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={copyQuote}>
                <i
                  className="fa fa-clipboard fa-lg"
                  aria-hidden="true"
                  style={randomColorStyle}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
