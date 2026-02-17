import { auth } from '@/libs/auth';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import z from 'zod';

const sessionUserSchema = z.object({
  id: z.coerce.number().int().positive(),
  email: z.email()
});

export const getAuthenticatedUser = async () => {
  const session = await auth();
  if (!session) redirect('/login');

  const user = sessionUserSchema.parse(session.user);
  return user;
};
