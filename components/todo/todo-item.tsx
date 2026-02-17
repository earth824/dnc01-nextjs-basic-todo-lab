import DeleteButton from '@/components/todo/delete-button';
import type { Todo } from '@/types/todo';
import { cn } from '@/utils/cn';
import { convertFirstCharToUpperCase } from '@/utils/format-string';
import { SquarePen } from 'lucide-react';
import Link from 'next/link';

type TodoItemProps = Todo & { showAction?: boolean };

export default function TodoItem({
  id,
  title,
  status,
  showAction = true
}: TodoItemProps) {
  return (
    <div className="flex justify-between items-center p-4">
      <h4>{title}</h4>
      <div className="flex items-center gap-12">
        <div
          className={cn(
            'bg-green-500 text-white text-xs px-2 py-0.5 rounded-lg',
            status === 'pending' && 'bg-red-500'
          )}
        >
          {convertFirstCharToUpperCase(status)}
        </div>
        {showAction && (
          <div className="flex items-center gap-2">
            <Link
              href={`todo/${id}/edit`}
              className="border border-gray-200 p-2 rounded-lg text-blue-500 hover:bg-blue-50"
            >
              <SquarePen />
            </Link>
            <DeleteButton id={id} />
          </div>
        )}
      </div>
    </div>
  );
}
