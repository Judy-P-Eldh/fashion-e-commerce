'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavigationLinks() {
  const pathname = usePathname();
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections/women' },
    { name: 'SALE', href: '/sale' },
  ];
  const isActive = (href: string) => {
    if (!mounted) return false; 

    return pathname === href || pathname.startsWith(href + '/');
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="grid">
      <ul className="flex items-center text-2xl">
        {links.map((link) => {
          return (
            <li
              key={link.name}
              className={`${mounted && isActive(link.href) ? 'underline' : ''} mr-10`}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
