import Menu from '@/components/layout/menu';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white shadow">
      <Link href="/">
        <div className="flex items-center gap-6">
          <Image src="/logo.png" alt="Basic Todo" width={48} height={48} />
          <h2 className="text-3xl text-blue-500 font-bold">Basic Todo</h2>
        </div>
      </Link>
      <Menu />
    </header>
  );
}
