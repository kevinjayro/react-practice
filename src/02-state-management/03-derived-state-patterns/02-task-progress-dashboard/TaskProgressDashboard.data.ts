import type { Task } from './TaskProgressDashboard.type';

export const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Learn useState',
    completed: true,
  },
  {
    id: 2,
    title: 'Practice derived state',
    completed: true,
  },
  {
    id: 3,
    title: 'Build a dashboard',
    completed: false,
  },
  {
    id: 4,
    title: 'Review TypeScript',
    completed: false,
  },
];
