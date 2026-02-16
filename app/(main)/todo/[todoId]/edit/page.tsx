import TodoForm from '@/components/todo/todo-form';
import { updateTodo } from '@/libs/actions/todo';
import { getTodoById } from '@/libs/data/todo';
import { positiveIntSchema } from '@/libs/schemas/common';
import { Undo2 } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edit Todo'
};

export default async function EditTodoPage({
  params
}: PageProps<'/todo/[todoId]/edit'>) {
  const { todoId } = await params;
  const { success, data: id } = positiveIntSchema.safeParse(todoId);
  if (!success) {
    notFound();
  }

  const todo = await getTodoById(id);
  if (!todo) {
    notFound();
  }

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
        <TodoForm
          submitLabel="Update"
          defaultValues={todo}
          onSubmitAction={updateTodo.bind(null, id)}
        />
      </div>
    </main>
  );
}

// bind
// const test = (a, b, c) => { console.log(this); console.log(a) }
// const bindTest = test.bind(null, 'something')
// similar to (b, c) => { console.log(null); console.log('something') }
// test() ==> console.log(window)
// bindTest() ==> console.log(null)
// test(55) ==> console.log(window); console.log(55)
// bindTest() ==> console.log(null); console.log('something')
