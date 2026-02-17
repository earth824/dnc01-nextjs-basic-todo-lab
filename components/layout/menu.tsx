'use client';

import MenuItem from '@/components/layout/menu-item';
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const protectedMenus = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/todo', label: 'Todo' }
  // { href: '/setting', label: 'Setting' }
];

const publicMenus = [
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' }
];

export default function Menu() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (status === 'loading') return null;

  const menus = session ? protectedMenus : publicMenus;
  return (
    <nav className="space-x-4">
      {menus.map((el) => (
        <MenuItem
          key={el.label}
          href={el.href}
          label={el.label}
          active={el.href === pathname}
        />
      ))}

      {session && (
        <button
          className="px-5 py-2.5 rounded-lg hover:bg-gray-100"
          onClick={() => signOut({ redirectTo: '/login' })}
        >
          Logout
        </button>
      )}
    </nav>
  );
}
