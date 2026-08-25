import { useState } from 'react';
import { products as initialProducts } from './ShoppingCart.data';
import type { Product } from './ShoppingCart.type';

export default function ShoppingCart() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const handleQuantityChange = (id: number, change: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item,
      ),
    );
  };
  return (
    <section>
      <h2>Shopping Cart</h2>

      <ul>
        {products.map(({ id, name, price, quantity }) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>

            <button
              onClick={() => {
                handleQuantityChange(id, 1);
              }}
            >
              Increase
            </button>
            <button
              onClick={() => {
                handleQuantityChange(id, -1);
              }}
            >
              Decrease
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
