import { useState } from "react";
import Guessbutton from "./Guessbutton";

const difficultyLevels = [
  { difficulty: "easy", range: 10 },
  { difficulty: "medium", range: 50 },
  { difficulty: "hard", range: 100 },
];

function Radiobox({ setRandomNumber }) {
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState(difficultyLevels[0].difficulty);

  function selectDifficulty(difficultyOption) {
    setRandomNumber(
      Math.floor(Math.random() * Number(difficultyOption.range)) + 1,
    );
    setMessage(
      `The number ranges from 1-${difficultyOption.range} in ${difficultyOption.difficulty}`,
    );
  }

  return (
    <div
      className="card bg-dark border-warning p-4 mb-4 text-center"
      style={{ width: "400px" }}
    >
      <h2 className="text-warning fw-bold mb-3">⚡ Choose Difficulty</h2>

      <div className="d-flex justify-content-center gap-4 mb-3">
        {difficultyLevels.map((option, index) => (
          <div key={option.difficulty} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="Difficulty"
              value={option.difficulty}
              checked={selected === option.difficulty}
              onChange={() => {
                setSelected(option.difficulty);
                selectDifficulty(option);
              }}
            />
            <label className="form-check-label ms-2 text-white">
              {option.difficulty}
            </label>
          </div>
        ))}
      </div>

      {message && (
        <p className="badge bg-warning text-dark fs-6 p-2">{message}</p>
      )}
    </div>
  );
}

export default Radiobox;
