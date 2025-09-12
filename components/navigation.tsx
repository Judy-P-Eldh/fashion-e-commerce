import Image from "next/image";
import Link from "next/link";
import Search from "./search";

export default function Navigation() {
  return (
    <header className="">
      <nav>
        <ul className="flex justify-between items-center p-4">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Collections</Link>
          </li>
          <li>
            <Link href="#">SALE</Link>
          </li>
        </ul>
        <picture className="flex items-center">
          <Image src={'/mail.svg'} alt="" width={200} height={200} />
        </picture>
        <div><Search /></div>
        <div className="flex gap-5">
          <Link href="#">
            {" "}
            <Image src={'/mail.svg'} width={200} height={200} alt="Profile" />
          </Link>
          <Link href="#">
            {" "}
            <Image src={'/mail.svg'} width={200} height={200} alt="Cart" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
