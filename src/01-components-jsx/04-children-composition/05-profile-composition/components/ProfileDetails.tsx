import type { ReactNode } from 'react';

type ProfileDetailsProps = {
  children: ReactNode;
};

export default function ProfileDetails({ children }: ProfileDetailsProps) {
  return <div>{children}</div>;
}
