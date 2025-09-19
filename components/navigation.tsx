import Link from 'next/link';
import Search from './search';
import { User, ShoppingBag } from 'lucide-react';
import NavigationLinks from './navigation-links';

export default function Navigation() {
  return (
    <header className="h-45 text-black content-grid ">
      <div className="breakout grid-cols-3 grid">
        <NavigationLinks />
        <div className="flex justify-center items-center">
          <h1 className="text-9xl">LOGO</h1>
        </div>
        <aside className="flex gap-5 items-center justify-end">
          <Search btn={false} />
          <Link href="#">
            {' '}
            <User strokeWidth={1.5} size={35}></User>
          </Link>
          <Link href="#">
            {' '}
            <ShoppingBag strokeWidth={1.5} size={35}></ShoppingBag>
          </Link>
        </aside>
      </div>
    </header>
  );
}
