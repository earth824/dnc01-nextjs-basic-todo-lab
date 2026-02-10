import { SquarePen, Trash2 } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default function DashboardPage() {
  return (
    <main className="p-8 space-y-8">
      {/* OVERVIEW */}
      <section className="grid grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-gray-500">Total</h3>
          <h2 className="text-center font-medium text-3xl">22</h2>
        </div>
        <div className="bg-blue-500 ">2</div>
        <div className="bg-green-500 ">3</div>
      </section>

      {/* LATEST TODO */}
      <section className="bg-white p-8 rounded-2xl grid gap-8">
        <h1 className="text-2xl font-semibold">Latest Todo</h1>
        <div className="border-y border-gray-200 divide-y divide-gray-200">
          <div className="flex justify-between items-center p-4">
            <h4>React Exam</h4>
            <div className="flex items-center gap-12">
              <div className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-lg">
                Completed
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="todo/xxx/edit"
                  className="border border-gray-200 p-2 rounded-lg text-blue-500 hover:bg-blue-50"
                >
                  <SquarePen />
                </Link>

                <button className="border border-gray-200 p-2 rounded-lg text-red-500 hover:bg-red-50">
                  <Trash2 />
                </button>
              </div>
            </div>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>
    </main>
  );
}
