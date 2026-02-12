import { prisma } from '@/libs/db/prisma';
import type { TodoStatus } from '@/types/todo';
import { simulateLoading } from '@/utils/simulation';

export const getAllTodo = async () => {
  await simulateLoading();
  const todos = await prisma.todo.findMany({ orderBy: { updatedAt: 'desc' } });
  return todos;
};

export const countTodoGroupByStatus = async () => {
  const data = await prisma.todo.groupBy({
    by: 'status',
    _count: true
  });
  console.log(data);
  const result = data.reduce<Record<TodoStatus, number>>(() => {}, {
    completed: 0,
    pending: 0
  });
};
