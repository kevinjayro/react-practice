import { useState } from 'react';
import { todos as initialTodos } from './TodoManager.data';
import type { Todo } from './TodoManager.type';

export default function TodoManager() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };
  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const completedCount = todos.reduce(
    (count, item) => (item.completed ? count + 1 : count),
    0,
  );
  return (
    <section>
      <h2>Todo Manager</h2>

      <ul>
        {todos.map(({ id, title, completed }) => (
          <li key={id}>
            <span>{title}</span>
            <span>{completed ? 'Completed' : 'Pending'}</span>
            <button
              onClick={() => {
                handleToggle(id);
              }}
            >
              Toggle
            </button>
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p>Completed: {completedCount}</p>
    </section>
  );
}
