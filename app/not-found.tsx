import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 min-h-screen">
      <h1 className="text-7xl text-blue-500 font-extrabold">404</h1>
      <h2 className="text-3xl font-medium">Page not found</h2>
      <h3 className="text-xl text-gray-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
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
