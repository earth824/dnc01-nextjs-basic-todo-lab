import type { Todo as PrismaTodo } from '@/libs/db/generated/prisma/client';

export type Todo = PrismaTodo;

export type TodoStatus = Todo['status'];
