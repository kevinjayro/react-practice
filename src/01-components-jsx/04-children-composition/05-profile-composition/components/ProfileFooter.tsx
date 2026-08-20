import type { ReactNode } from 'react';

type ProfileFooterProps = {
  children: ReactNode;
};

export default function ProfileFooter({ children }: ProfileFooterProps) {
  return <footer>{children}</footer>;
}
