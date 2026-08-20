import type { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main>
      <header>My Application</header>
      <section>{children}</section>
      <footer>© 2026 Acme Corporation</footer>
    </main>
  );
}
