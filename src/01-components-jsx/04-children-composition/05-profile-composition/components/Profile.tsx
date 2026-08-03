import type { ReactNode } from 'react';

type ProfileProps = {
  children: ReactNode;
};

export default function Profile({ children }: ProfileProps) {
  return <article>{children}</article>;
}
