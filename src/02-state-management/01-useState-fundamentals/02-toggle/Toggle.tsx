import { useState } from 'react';

export default function Toggle() {
  const [status, setStatus] = useState(false);
  const handleChange = () => {
    setStatus((prev) => !prev);
  };
  return (
    <section>
      <h2>Status</h2>

      <p>Current status: {status ? 'ON' : 'OFF'}</p>

      <button onClick={handleChange}>Toggle</button>
    </section>
  );
}
