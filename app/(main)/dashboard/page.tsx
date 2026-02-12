import {
  CardSkeleton,
  RowSkeletonContainer
} from '@/components/dashboard/skeleton';
import StatCard from '@/components/dashboard/stat-card';
import TodoList from '@/components/todo/todo-list';
import { countTodoGroupByStatus } from '@/libs/data/todo';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default async function DashboardPage() {
  await countTodoGroupByStatus();
  return (
    <main className="p-8 space-y-8">
      {/* OVERVIEW */}
      <section className="grid grid-cols-3 gap-8">
        <StatCard label="Total" value={20} />
        <StatCard label="Completed" value={20} />
        <StatCard label="Pending" value={20} />
      </section>

      {/* LATEST TODO */}
      <section className="bg-white p-8 rounded-2xl grid gap-8">
        <h1 className="text-2xl font-semibold">Latest Todo</h1>
        <Suspense fallback={<RowSkeletonContainer />}>
          <TodoList showAction={false} />
        </Suspense>
      </section>
    </main>
  );
}
