'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-4">
      <h1 className="text-red-500 text-7xl font-extrabold">500</h1>
      <h2 className="text-3xl font-medium">Internal Server Error</h2>
      <h3 className="text-xl text-gray-600">
        We apologize for the inconvenience. Please try again later.
      </h3>
      <Link
        href="/"
        className="bg-gray-200 px-5 py-2.5 rounded-lg text-sm text-gray-800"
      >
        Go Home
      </Link>
    </main>
  );
}
