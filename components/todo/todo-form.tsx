'use client';

import { createTodo } from '@/libs/actions/todo';
import { todoFormSchema, type TodoInput } from '@/libs/schemas/todo';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

type TodoFormProps = {
  submitLabel?: string;
  defaultValues?: TodoInput;
};

export default function TodoForm({
  submitLabel = 'Create',
  defaultValues = { title: '', status: 'pending' }
}: TodoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TodoInput>({
    defaultValues,
    resolver: zodResolver(todoFormSchema)
  });

  const [isPending, startTranstion] = useTransition();

  const onSubmit = (data: TodoInput) => {
    startTranstion(async () => {
      await createTodo(data);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <div className="grid gap-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="w-full border border-gray-200 outline-none px-3 py-1.5 h-9 rounded-lg"
            {...register('title')}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="grid gap-3">
          <span>Status</span>

          <div className="flex gap-12">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="pending"
                value="pending"
                className="size-4"
                {...register('status')}
              />
              <label htmlFor="pending">Pending</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="completed"
                value="completed"
                className="size-4"
                {...register('status')}
              />
              <label htmlFor="completed">Completed</label>
            </div>
          </div>
          {errors.status && (
            <p className="text-red-500">{errors.status.message}</p>
          )}
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-flex justify-center disabled:opacity-80"
          disabled={isPending}
        >
          {isPending ? <Loader className="animate-spin" /> : submitLabel}
        </button>
      </div>
    </form>
  );
}
