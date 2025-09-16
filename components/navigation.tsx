import Image from 'next/image';
import Link from 'next/link';
import Search from './search';

export default function Navigation() {
  return (
    <header className="h-60 grid text-black full-width grid-cols-3">
      <nav className="grid">
        <ul className="flex justify-between items-center p-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/collections/women">Collections</Link>
          </li>
          <li>
            <Link href="#">SALE</Link>
          </li>
        </ul>
      </nav>
      <div className='flex justify-center'>
        <picture className="flex items-center">
          <Image src="/mail.svg" alt="" width={200} height={200} />
        </picture>
      </div>
      <aside className="flex gap-5 items-center">
        <Search btn={false} />
        <Link href="#">
          {' '}
          <Image src="/mail.svg" width={200} height={200} alt="Profile" />
        </Link>
        <Link href="#">
          {' '}
          <Image src="/mail.svg" width={200} height={200} alt="Cart" />
        </Link>
      </aside>
    </header>
  );
}
