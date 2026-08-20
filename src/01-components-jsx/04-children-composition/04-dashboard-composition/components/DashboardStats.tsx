import type { ReactNode } from 'react';

type DashboardStatsProps = {
  children: ReactNode;
};

export default function DashboardStats({ children }: DashboardStatsProps) {
  return <div>{children}</div>;
}
