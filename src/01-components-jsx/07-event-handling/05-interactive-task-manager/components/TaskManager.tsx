import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import { initialTasks } from '../data/tasks';

export default function TaskManager() {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskTitle, setTaskTitle] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = taskTitle.trim();

    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTaskTitle('');
  };

  const handleToggle = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <section>
      <h2>Task Manager</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={taskTitle}
          onChange={handleChange}
        />

        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map(({ id, title, completed }) => (
          <li key={id}>
            <span>{title}</span>

            <button onClick={() => handleToggle(id)}>
              {completed ? 'Mark Incomplete' : 'Complete'}
            </button>

            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
