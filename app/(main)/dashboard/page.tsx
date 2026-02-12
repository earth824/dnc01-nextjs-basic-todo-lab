import OverviewCard from '@/components/dashboard/overview-card';
import {
  CardSkeletonContainer,
  RowSkeletonContainer
} from '@/components/dashboard/skeleton';
import TodoList from '@/components/todo/todo-list';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default async function DashboardPage() {
  return (
    <main className="p-8 space-y-8">
      {/* OVERVIEW */}
      <Suspense fallback={<CardSkeletonContainer />}>
        <OverviewCard />
      </Suspense>

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
