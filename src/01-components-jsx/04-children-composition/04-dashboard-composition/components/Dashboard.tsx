import type { ReactNode } from 'react';

type DashboardProps = {
  children: ReactNode;
};

export default function Dashboard({ children }: DashboardProps) {
  return <section>{children}</section>;
}
