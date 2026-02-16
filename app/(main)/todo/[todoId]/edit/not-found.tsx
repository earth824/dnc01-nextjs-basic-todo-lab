import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col gap-6 min-h-[80vh] p-4">
      <h1 className="text-7xl text-blue-500 font-extrabold">404</h1>
      <p className="text-3xl font-medium text-center">
        The todo you&apos;re looking for doesn&apos;t exist or has been removed
      </p>
      <Link
        href="/todo"
        className="px-5 py-2.5 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        Back to Todo
      </Link>
    </div>
  );
}
