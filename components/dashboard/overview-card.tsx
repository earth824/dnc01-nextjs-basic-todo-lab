import StatCard from '@/components/dashboard/stat-card';
import { countTodoGroupByStatus } from '@/libs/data/todo';

export default async function OverviewCard() {
  const { completed, pending } = await countTodoGroupByStatus();
  return (
    <section className="grid grid-cols-3 gap-8">
      <StatCard label="Total" value={completed + pending} />
      <StatCard label="Completed" value={completed} />
      <StatCard label="Pending" value={pending} />
    </section>
  );
}
