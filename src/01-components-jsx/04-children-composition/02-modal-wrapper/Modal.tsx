import type { ReactNode } from 'react';

type ModalProps = {
  title: string;
  children: ReactNode;
};

export default function Modal({ title, children }: ModalProps) {
  return (
    <div>
      <h2>{title}</h2>
      <section>{children}</section>
      <button>Close</button>
    </div>
  );
}
