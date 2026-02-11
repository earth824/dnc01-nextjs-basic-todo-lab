import {
  CardSkeleton,
  RowSkeleton,
  RowSkeletonContainer
} from '@/components/dashboard/skeleton';
import TodoList from '@/components/todo/todo-list';
import { simulateLoading } from '@/utils/simulation';
import { SquarePen, Trash2 } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default async function DashboardPage() {
  // await simulateLoading();
  // await getAllTodo
  return (
    <main className="p-8 space-y-8">
      {/* OVERVIEW */}
      <section className="grid grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-gray-500">Total</h3>
          <h2 className="text-center font-medium text-3xl">22</h2>
        </div>
        <CardSkeleton />
        <div className="bg-green-500 ">3</div>
      </section>

      {/* LATEST TODO */}
      <section className="bg-white p-8 rounded-2xl grid gap-8">
        <h1 className="text-2xl font-semibold">Latest Todo</h1>
        <TodoList />
      </section>
    </main>
  );
}
