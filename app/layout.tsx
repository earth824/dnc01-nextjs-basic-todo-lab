import '@/app/globals.css';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto();

export const metadata: Metadata = {
  title: {
    template: '%s | Basic Todo',
    default: 'Basic Todo'
  },
  description: 'World No.1 Todo List Web Application'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${roboto.className}`}>{children}</body>
    </html>
  );
}
