import React from "react";

export default function Quotes() {
  const quotes = ["The best way to get started is to quit talking and begin doing.", "Don’t let yesterday take up too much of today.", "It’s not whether you get knocked down, it’s whether you get up.", "If you are working on something exciting, it will keep you motivated.", "Success doesn’t come from what you do occasionally, it comes from what you do consistently.", "Dream big and dare to fail.", "Don’t watch the clock; do what it does. Keep going.", "Great things never come from comfort zones.", "Push yourself, because no one else is going to do it for you.", "Failure is not the opposite of success, it’s part of success.", "Opportunities don’t happen, you create them.", "Do something today that your future self will thank you for.", "Little things make big days.", "It always seems impossible until it’s done.", "Start where you are. Use what you have. Do what you can."];

  const [randomNumber, setRandomNumber] = React.useState(0);
  const quote = quotes[randomNumber];

  const generateQuote = () => {
    let newNumber = Math.round(Math.random()*100)%quotes.length;
    while(newNumber === randomNumber) {
      newNumber = Math.round(Math.random()*100)%quotes.length;
    }
    setRandomNumber(newNumber);
  }
  return (
    <>
      <h1>Random quote</h1>
      <p>Here is your random quote:</p>
      <blockquote>{quote}</blockquote>
      <button onClick={generateQuote}>Generate quote</button>
      <footer>All quotes are provided by ChatGPT</footer>
    </>
  )
}