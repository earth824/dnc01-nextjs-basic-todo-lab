import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home'
};

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-8 min-h-screen">
      <Image src="/logo.png" alt="Basic Todo" width={120} height={120} />
      <h1 className="text-4xl font-bold">
        The best simple todo list for you. Join us!
      </h1>
      <Link
        href="/dashboard"
        className="bg-gray-200 px-5 py-2.5 rounded-lg hover:bg-gray-300"
      >
        Get Started
      </Link>
    </main>
  );
}
