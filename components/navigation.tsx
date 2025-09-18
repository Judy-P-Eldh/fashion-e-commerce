import Image from 'next/image';
import Link from 'next/link';
import Search from './search';
import { User, ShoppingBag } from 'lucide-react';

export default function Navigation() {
  return (
    <header className="h-60 text-black content-grid ">
      <div className="breakout grid-cols-3 grid">
        <nav className="grid">
          <ul className="flex items-center">
            <li className='mr-8'>
              <Link href="/">Home</Link>
            </li>
            <li className='mr-8'>
              <Link href="/collections/women">Collections</Link>
            </li>
            <li>
              <Link href="#">SALE</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center">
          <picture className="flex items-center">
            <User></User>
          </picture>
        </div>
        <aside className="flex gap-5 items-center justify-end">
          <Search btn={false} />
          <Link href="#">
            {' '}
               <User></User>
          </Link>
          <Link href="#">
            {' '}
           <ShoppingBag></ShoppingBag>
          </Link>
        </aside>
      </div>
    </header>
  );
}
