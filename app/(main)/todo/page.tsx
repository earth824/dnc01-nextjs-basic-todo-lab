import { simulateLoading } from '@/utils/simulation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Todo'
};

export default async function TodoPage() {
  await simulateLoading();
  return <div>TodoPage</div>;
}
