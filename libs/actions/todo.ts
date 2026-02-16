'use server';

import { prisma } from '@/libs/db/prisma';
import { positiveIntSchema } from '@/libs/schemas/common';
import { todoFormSchema, type TodoInput } from '@/libs/schemas/todo';
import type { Todo } from '@/types/todo';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createTodo = async (input: TodoInput) => {
  const data = todoFormSchema.parse(input);
  await prisma.todo.create({ data: { ...data, userId: 1 } });
  revalidatePath('/todo');
  redirect('/todo');
};

export const updateTodo = async (todoId: Todo['id'], input: TodoInput) => {
  const data = todoFormSchema.parse(input);
  const id = positiveIntSchema.parse(todoId);
  await prisma.todo.update({
    data,
    where: { id }
  });
  revalidatePath('/todo');
  redirect('/todo');
};
