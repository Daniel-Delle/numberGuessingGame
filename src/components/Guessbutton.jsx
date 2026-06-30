import { useState } from "react";
import ReactConfetti from "react-confetti";
import Radiobox from "./Radiobox";

function Guessbutton() {
  const [randomNumber, setRandomNumber] = useState(0);

  // state declarations
  // userInput state
  const [inputValue, setInputValue] = useState(" ");

  // guess button state
  const [result, setResult] = useState("");

  // reveal button and answer state
  const [reveal, setReveal] = useState("");

  // confetti state
  const [celebrate, setCelebrate] = useState(false);

  // Difficulty state

  // Comparing user input and number generated
  function compare() {
    if (randomNumber === inputValue) {
      setCelebrate(true);
      return <p>You got it right!</p>;
    } else {
      setCelebrate(false);
      return <p>Wrong answer, try again.</p>;
    }
  }

  // Function to reveal answer which will be set to result state
  function answer() {
    setReveal(`The number is ${randomNumber}.`);
    // return <p>{reveal}</p>
  }

  return (
    <div className="min-vh-100 bg-dark text-white d-flex flex-column align-items-center justify-content-center">
      {/* Header */}
      <h1 className="display-4 fw-bold text-warning text-center">
        WELCOME TO DANIEL'S GUESSING GAME
      </h1>
      <p className="lead text-center mb-5">Challenge your mind here.</p>

      <Radiobox setRandomNumber={setRandomNumber} />

      {/* Game box */}
      <div className="card bg-secondary text-white p-4 text-center w-50">
        <h3 className="fw-bold mb-3">GUESS THE NUMBER!</h3>

        {/* Putting user input in a container or state */}
        <input
          type="number"
          placeholder="Type your guess here"
          onChange={(e) => setInputValue(Number(e.target.value))}
          value={inputValue}
          className="form-control text-center mb-3"
        />

        {/* Determining what happens after user clicks */}
        <button
          onClick={() => {
            setResult(compare());

            setInputValue("");
          }}
          className="btn btn-warning fw-bold mb-2"
        >
          GUESS
        </button>

        <button onClick={answer} className="btn btn-outline-light">
          Reveal Answer
        </button>
      </div>

      {/* Results */}
      <div className="mt-4 text-center fs-5">
        <p>{result}</p>
        <p>{reveal}</p>
        {celebrate === true ? <ReactConfetti /> : null}
      </div>
    </div>
  );
}

export default Guessbutton;
