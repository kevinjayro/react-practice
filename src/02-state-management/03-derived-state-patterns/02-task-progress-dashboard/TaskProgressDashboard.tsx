import { useState } from 'react';
import { initialTasks } from './TaskProgressDashboard.data';
import type { Task } from './TaskProgressDashboard.type';

export default function TaskProgressDashboard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleToggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const total = tasks.length;

  const completed = tasks.reduce(
    (acc, task) => acc + (task.completed ? 1 : 0),
    0,
  );

  const remaining = total - completed;

  const progress = total === 0 ? 0 : (completed / total) * 100;

  const status =
    progress === 0
      ? 'Not Started'
      : progress === 100
        ? 'Completed'
        : 'In Progress';

  return (
    <section>
      <h2>Task Progress</h2>

      <div>
        <p>Total: {total}</p>
        <p>Completed: {completed}</p>
        <p>Remaining: {remaining}</p>
        <p>Progress: {Math.round(progress)}%</p>
        <p>Status: {status}</p>
      </div>

      <ul>
        {tasks.map(({ id, title, completed }) => (
          <li key={id}>
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => handleToggleTask(id)}
              />
              {title}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
