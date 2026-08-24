import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h2>Counter</h2>

      <p>Count: {count}</p>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </section>
  );
}
