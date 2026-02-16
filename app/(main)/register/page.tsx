import RegisterForm from '@/components/auth/register-form';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <div className="flex flex-col gap-8 rounded-2xl bg-white p-8">
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <RegisterForm />
        <span className="self-center">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </span>
      </div>
    </main>
  );
}
