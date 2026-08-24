import { useState } from 'react';
import { shoppingLists } from './data';

export default function ShoppingList() {
  const [shoppingList, setShoppingList] = useState(shoppingLists);

  const handleAdd = (name: string) => {
    const newItem = {
      id: Date.now(),
      name,
    };
    setShoppingList((prev) => [...prev, newItem]);
  };

  const handleDelete = (id: number) => {
    setShoppingList((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <section>
      <h2>Shopping List</h2>

      <ul>
        {shoppingList.map(({ id, name }) => (
          <li key={id}>
            <span>{name}</span>
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          handleAdd('Apples');
        }}
      >
        Add Apples
      </button>
    </section>
  );
}
