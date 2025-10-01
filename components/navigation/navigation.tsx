import Link from "next/link";
import Search from "../search";
import { User, ShoppingBag, Menu } from "lucide-react";
import NavigationLinks from "./navigation-links";

export default function Navigation() {
  return (
    <header className="h-30 lg:h-45 text-black content-grid">
      <div className="breakout grid-cols-3 grid">
        <div className="hidden lg:flex">
          <NavigationLinks />
        </div>
        <button className="lg:hidden" aria-label="open/close menu">
          <Menu strokeWidth={1.5} size={35} className="h-7" />
        </button>

        <div className="flex justify-center items-center">
          <h1 className="text-6xl lg:text-9xl">
            <Link href="/">LOGO</Link>
          </h1>
        </div>
        <aside
          className="contents
           lg:flex justify-start lg:flex-row-reverse items-center lg:gap-6"
        >
          <div className="flex items-center gap-2 lg:gap-6 justify-end">
            <Link href="#" aria-label="log">
              {" "}
              <User
                strokeWidth={1.5}
                size={35}
                className="h-7 lg:h-full"
              >Log in</User>
            </Link>
            <Link href="#" aria-label="shopping bag">
              {" "}
              <ShoppingBag
                strokeWidth={1.5}
                size={35}
                className="h-7 lg:h-full"
              >Shopping bag</ShoppingBag>
            </Link>
          </div>
          <div className="col-span-3 flex justify-center">
            <Search btn={false} />
          </div>
        </aside>
      </div>
    </header>
  );
}
