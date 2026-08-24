import { useState } from 'react';

export default function ScoreManager() {
  const [score, setScore] = useState(0);
  const handleChange = (points: number) => {
    setScore((prev) => prev + points);
  };

  const handleReset = () => {
    setScore(0);
  };
  return (
    <section>
      <h2>Player Score</h2>

      <p>Score: {score}</p>

      <button
        onClick={() => {
          handleChange(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          handleChange(-10);
        }}
      >
        -10
      </button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
}
