'use server';

import { PrismaClientKnownRequestError } from '@/libs/db/generated/prisma/internal/prismaNamespace';
import { prisma } from '@/libs/db/prisma';
import {
  registerExcludeConfirmSchema,
  type RegisterInput
} from '@/libs/schemas/auth';
import type { ServerFunctionResponse } from '@/types/response';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

export const createUser = async (
  input: RegisterInput
): Promise<ServerFunctionResponse> => {
  const data = registerExcludeConfirmSchema.parse(input);
  data.password = await bcrypt.hash(data.password, 12);

  try {
    await prisma.user.create({ data });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === 'P2002') {
      return {
        success: false,
        message: 'Email already in use',
        code: 'DUPLICATE_EMAIL'
      };
    }
    throw err;
  }
  redirect('/login');
};
