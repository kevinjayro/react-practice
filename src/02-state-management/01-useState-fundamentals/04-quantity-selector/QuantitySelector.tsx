import { useState } from 'react';

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (count: number) => {
    if (count > 1)
      setQuantity((prev) => (prev + count >= 1 ? prev + count : prev));
  };
  return (
    <section>
      <h2>Quantity</h2>

      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        -
      </button>

      <span>{quantity}</span>

      <button
        onClick={() => {
          handleChange(+1);
        }}
      >
        +
      </button>
    </section>
  );
}
