import { cn } from '@/utils/cn';
import Link from 'next/link';

type MenuItemProps = {
  href: string;
  label: string;
  active: boolean;
};

export default function MenuItem({ active, href, label }: MenuItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'px-5 py-2.5 rounded-lg',
        active ? 'text-blue-500' : 'hover:bg-gray-100'
      )}
    >
      {label}
    </Link>
  );
}
