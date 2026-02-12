import { RowSkeletonContainer } from '@/components/dashboard/skeleton';
import TodoList from '@/components/todo/todo-list';
import { Plus } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Todo'
};

export default async function TodoPage() {
  return (
    <main className="p-8">
      <div className="bg-white p-8 rounded-2xl flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Todo List</h1>
          <Link
            href="/todo/create"
            className="border border-gray-200 p-2 rounded-lg hover:bg-gray-100"
          >
            <Plus />
          </Link>
        </div>

        <input
          type="text"
          placeholder="Search todo ..."
          className="outline-none border border-gray-200 w-full px-3 py-1.5 rounded-lg h-9"
        />

        <Suspense fallback={<RowSkeletonContainer />}>
          <TodoList />
        </Suspense>
      </div>
    </main>
  );
}
