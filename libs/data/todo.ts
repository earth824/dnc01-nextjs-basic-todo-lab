import { prisma } from '@/libs/db/prisma';
import type { TodoStatus } from '@/types/todo';
import { simulateLoading } from '@/utils/simulation';

export const getAllTodo = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { updatedAt: 'desc' } });
  return todos;
};

export const countTodoGroupByStatus = async () => {
  await simulateLoading();
  const data = await prisma.todo.groupBy({
    by: 'status',
    _count: true
  });

  const result = data.reduce<Record<TodoStatus, number>>(
    (prev, el) => {
      prev[el.status] = el._count;
      return prev;
    },
    {
      completed: 0,
      pending: 0
    }
  );

  return result;
};
