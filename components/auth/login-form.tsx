'use client';

// import { login } from '@/libs/actions/auth';
import { loginSchema, type LoginInput } from '@/libs/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import {
  signIn
  // , useSession
} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginInput>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginSchema)
  });

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  // const { update } = useSession();

  const onSubmit = (data: LoginInput) => {
    startTransition(async () => {
      // const result = await login(data);
      // if (!result.success) {
      //   setError('root', { message: result.message });
      //   return;
      // }
      // await update();
      // router.push('/dashboard');

      const { error } = await signIn('credentials', {
        ...data,
        redirect: false
      });

      if (error) {
        setError('root', { message: 'Invalid email or password' });
        return;
      }

      router.push('/dashboard');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <div className="grid gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="outline-none w-full px-3 py-1.5 border border-gray-200 rounded-lg h-9"
            placeholder="Enter your email"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="grid gap-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="outline-none w-full px-3 py-1.5 border border-gray-200 rounded-lg h-9"
            placeholder="Enter your password"
            {...register('password')}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        {errors.root && (
          <p className="text-red-500 bg-red-200 rounded-lg p-3">
            {errors.root.message}
          </p>
        )}

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg inline-flex justify-center disabled:opacity-80"
          disabled={isPending}
        >
          {isPending ? <Loader className="animate-spin" /> : 'Login'}
        </button>
      </div>
    </form>
  );
}
