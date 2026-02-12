import { prisma } from '@/libs/db/prisma';

export const getAllTodo = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { updatedAt: 'desc' } });
  return todos;
};
