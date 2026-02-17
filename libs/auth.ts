import { prisma } from '@/libs/db/prisma';
import { loginSchema } from '@/libs/schemas/auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(input) {
        const { email, password } = loginSchema.parse(input);

        const user = await prisma.user.findUnique({
          where: { email }
        });
        if (!user) return null;

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return null;

        return { id: user.id.toString(), email };
      }
    })
  ],
  callbacks: {
    session({ token, session }) {
      session.user.id = token.sub;
      return session;
    }
  }
});
