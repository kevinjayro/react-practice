import type { ReactNode } from 'react';

type ProfileHeaderProps = {
  children: ReactNode;
};

export default function ProfileHeader({ children }: ProfileHeaderProps) {
  return <header>{children}</header>;
}
