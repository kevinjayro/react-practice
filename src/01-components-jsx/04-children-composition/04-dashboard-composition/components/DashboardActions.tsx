import type { ReactNode } from 'react';

type DashboardActionsProps = {
  children: ReactNode;
};

export default function DashboardActions({ children }: DashboardActionsProps) {
  return <button>{children}</button>;
}
