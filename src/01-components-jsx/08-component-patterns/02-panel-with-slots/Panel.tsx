import type { ReactNode } from 'react';

type PanelProps = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
};

export default function Panel({ header, content, footer }: PanelProps) {
  return (
    <section>
      <header>{header}</header>

      <div>{content}</div>

      <footer>{footer}</footer>
    </section>
  );
}
