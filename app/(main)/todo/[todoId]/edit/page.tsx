import TodoForm from '@/components/todo/todo-form';
import { Undo2 } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Edit Todo'
};

export default function EditTodoPage() {
  return (
    <main className="p-8">
      <div className="bg-white rounded-2xl p-8 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Edit Todo</h1>
          <Link
            href="/todo"
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-100"
          >
            <Undo2 />
          </Link>
        </div>
        <TodoForm />
      </div>
    </main>
  );
}
