import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Baralho de Histórias Sociais para TEA — Seu filho com TEA aprende sem você repetir a explicação cem vezes',
  description: 'Seu filho com TEA aprende sem você repetir a explicação cem vezes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
