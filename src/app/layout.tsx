import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Olavo Tattoo',
  description: 'Olavo Tattoo — portfólio e agendamento'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[color:var(--bg)] text-white">
        {children}
      </body>
    </html>
  );
}