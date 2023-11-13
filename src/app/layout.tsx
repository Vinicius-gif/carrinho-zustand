import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Carrinho from '@/components/Carrinho';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Loja de crompras',
  description: 'E-comerce de vendas online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-lt-installed={true}>
      <body className={inter.className}>
        <Header/>
        <Carrinho/>
        {children}
      </body>
    </html>
  );
}
