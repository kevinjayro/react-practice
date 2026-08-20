import type { ReactNode } from 'react';

type DashboardHeaderProps = {
  children: ReactNode;
};

export default function DashboardHeader({ children }: DashboardHeaderProps) {
  return <header>{children}</header>;
}
