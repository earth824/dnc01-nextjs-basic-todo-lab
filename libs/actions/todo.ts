'use server';

import { prisma } from '@/libs/db/prisma';
import { positiveIntSchema } from '@/libs/schemas/common';
import { todoFormSchema, type TodoInput } from '@/libs/schemas/todo';
import { getAuthenticatedUser } from '@/libs/session';
import type { Todo } from '@/types/todo';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createTodo = async (input: TodoInput) => {
  const data = todoFormSchema.parse(input);
  const user = await getAuthenticatedUser();
  await prisma.todo.create({ data: { ...data, userId: user.id } });
  revalidatePath('/todo');
  redirect('/todo');
};

export const updateTodo = async (todoId: Todo['id'], input: TodoInput) => {
  const data = todoFormSchema.parse(input);
  const id = positiveIntSchema.parse(todoId);
  const user = await getAuthenticatedUser();
  await prisma.todo.update({
    data,
    where: { id, userId: user.id }
  });
  revalidatePath('/todo');
  redirect('/todo');
};
