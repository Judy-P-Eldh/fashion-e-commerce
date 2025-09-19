'use client';

import Link from 'next/link';
export default function NavigationLink({
  href,
  isActive,
  text,
}: {
  href: string;
  isActive: boolean;
  text: string;
}) {
  return (
    <Link href={href} className={isActive ? 'underline' : ''}>
      {text}
    </Link>
  );
}
