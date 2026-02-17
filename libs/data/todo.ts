import { prisma } from '@/libs/db/prisma';
import { getAuthenticatedUser } from '@/libs/session';
import type { Todo, TodoStatus } from '@/types/todo';

export const getAllTodo = async () => {
  const user = await getAuthenticatedUser();
  const todos = await prisma.todo.findMany({
    orderBy: { updatedAt: 'desc' },
    where: { userId: user.id }
  });
  return todos;
};

export const countTodoGroupByStatus = async () => {
  const user = await getAuthenticatedUser();

  const data = await prisma.todo.groupBy({
    by: 'status',
    _count: true,
    where: { userId: user.id }
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

export const getTodoById = async (id: Todo['id']) => {
  const user = await getAuthenticatedUser();
  return prisma.todo.findUnique({ where: { id, userId: user.id } });
};
