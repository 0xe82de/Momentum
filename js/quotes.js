const quotes = [
  {
    quote: "명언1",
    author: "저자1",
  },
  {
    quote: "명언2",
    author: "저자2",
  },
  {
    quote: "명언3",
    author: "저자3",
  },
  {
    quote: "명언4",
    author: "저자4",
  },
  {
    quote: "명언5",
    author: "저자5",
  },
  {
    quote: "명언6",
    author: "저자6",
  },
  {
    quote: "명언7",
    author: "저자7",
  },
  {
    quote: "명언8",
    author: "저자8",
  },
  {
    quote: "명언9",
    author: "저자9",
  },
  {
    quote: "명언10",
    author: "저자10",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;