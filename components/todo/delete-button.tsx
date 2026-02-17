'use client';

import { deleteTodo } from '@/libs/actions/todo';
import type { Todo } from '@/types/todo';
import { Loader, Trash2 } from 'lucide-react';
import { useTransition } from 'react';

type DeleteButtonProps = {
  id: Todo['id'];
};

export default function DeleteButton({ id }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClickDelete = () => {
    startTransition(async () => {
      await deleteTodo(id);
    });
  };

  return (
    <button
      className="border border-gray-200 p-2 rounded-lg text-red-500 hover:bg-red-50 disabled:opacity-80"
      onClick={handleClickDelete}
      disabled={isPending}
    >
      {isPending ? <Loader className="animate-spin" /> : <Trash2 />}
    </button>
  );
}
