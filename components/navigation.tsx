import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="content-grid">
      <nav>
        <ul className="flex justify-between items-center p-4">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="/collections/women">Collections</Link>
          </li>
          <li>
            <Link href="#">SALE</Link>
          </li>
        </ul>
        <picture className="flex items-center">
          <Image src="" alt="" width={200} height={200} />
        </picture>
        <div></div>
        <div className="flex gap-5">
          <Link href="#">
            <Image src="" width={200} height={200} alt="Profile" />
          </Link>
          <Link href="#">
            <Image src="" width={200} height={200} alt="Cart" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
