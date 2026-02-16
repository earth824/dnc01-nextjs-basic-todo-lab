import LoginForm from '@/components/auth/login-form';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <div className="flex flex-col gap-8 rounded-2xl bg-white p-8">
        <h1 className="text-2xl font-semibold">Login to your account</h1>
        <LoginForm />
        <span className="self-center">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </span>
      </div>
    </main>
  );
}
