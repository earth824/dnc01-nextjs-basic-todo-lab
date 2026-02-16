'use client';

import { createUser } from '@/libs/actions/auth';
import { registerSchema, type RegisterInput } from '@/libs/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<RegisterInput>({
    defaultValues: { email: '', password: '', confirm: '' },
    resolver: zodResolver(registerSchema)
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: RegisterInput) => {
    startTransition(async () => {
      const result = await createUser(data);
      if (!result.success && result.code === 'DUPLICATE_EMAIL') {
        setError('email', { message: result.message });
      }
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

        <div className="grid gap-1">
          <label htmlFor="confirm">Confirm password</label>
          <input
            id="confirm"
            type="password"
            className="outline-none w-full px-3 py-1.5 border border-gray-200 rounded-lg h-9"
            placeholder="Confirm your password"
            {...register('confirm')}
          />
          {errors.confirm && (
            <p className="text-red-500">{errors.confirm.message}</p>
          )}
        </div>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-80"
          disabled={isPending}
        >
          {isPending ? <Loader className="animate-spin" /> : 'Register'}
        </button>
      </div>
    </form>
  );
}
