'use client';
import NavigationLink from "./navigation-link"
import { usePathname } from 'next/navigation';

export default function NavigationLinks() {
  const pathname = usePathname();
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections/women' },
    { name: 'SALE', href: '/sale' },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav className="grid">
      <ul className="flex items-center text-2xl">
        {links.map((link) => {
          return (
            <li key={link.name} className={'mr-10'}>
              <NavigationLink href={link.href} isActive={isActive(link.href)} text={link.name}>
              </NavigationLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
