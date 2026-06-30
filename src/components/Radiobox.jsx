import { useState } from "react";
import Guessbutton from "./Guessbutton";

// Object which contains difficulty statement to make it dynamic
const difficultyRange = {
  range1: "The number ranges from 1-10 in easy",
  range2: "The number ranges from 1-50 in medium",
  range3: "The number ranges from 1-100 in hard",
};

// Random number generated and stored
let randomNumberValues = {
  easyvalue: Math.floor(Math.random() * 10) + 1,
  mediumvalue: Math.floor(Math.random() * 50) + 1,
  hardvalue: Math.floor(Math.random() * 100) + 1,
};

function Radiobox({ setRandomNumber }) {
  const [message, setMessage] = useState("");

  // FUNCTIONS FOR SETTING DIFFICULTY
  // EASY FUNCTION
  function easy() {
    setRandomNumber(randomNumberValues.easyvalue);
    setMessage(difficultyRange.range1);
  }

  // MEDIUM FUNCTION
  function medium() {
    setRandomNumber(randomNumberValues.mediumvalue);
    setMessage(difficultyRange.range2);
  }

  // DFFICULT FUNCTION
  function hard() {
    setRandomNumber(randomNumberValues.hardvalue);
    setMessage(difficultyRange.range3);
  }
  return (
    <div
      className="card bg-dark border-warning p-4 mb-4 text-center"
      style={{ width: "400px" }}
    >
      <h2 className="text-warning fw-bold mb-3">⚡ Choose Difficulty</h2>

      <div className="d-flex justify-content-center gap-4 mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Difficulty"
            onClick={easy}
          />
          <label className="form-check-label text-success fw-bold">Easy</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Difficulty"
            onClick={medium}
          />
          <label className="form-check-label text-warning fw-bold">
            Medium
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Difficulty"
            onClick={hard}
          />
          <label className="form-check-label text-danger fw-bold">Hard</label>
        </div>
      </div>

      {message && (
        <p className="badge bg-warning text-dark fs-6 p-2">{message}</p>
      )}
    </div>
  );
}

export default Radiobox;

// return (
//   <div
//     className="card bg-dark border-warning p-4 mb-4 text-center"
//     style={{ width: "400px" }}
//   >
//     {/*  */}
//     <p>{message}</p>
//     {/*  */}
//     <h2 className="text-warning fw-bold mb-3"> ⚡Choose difficulty : </h2>
//     <input type="radio" name="Difficulty" onClick={easy} /> Easy <br />
//     <input type="radio" name="Difficulty" onClick={medium} /> Medium <br />
//     <input type="radio" name="Difficulty" onClick={hard} /> Hard <br />
//   </div>
// );
