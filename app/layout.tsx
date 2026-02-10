import '@/app/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto();

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
