import { Loader } from 'lucide-react';
import Image from 'next/image';

export default function Loading() {
  return (
    <main className="flex flex-col justify-center items-center gap-8 min-h-screen">
      <Image src="/logo.png" alt="Basic Todo" width={120} height={120} />
      <Loader className="animate-spin text-blue-500" />
    </main>
  );
}
