import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";
import FooterNavColumn from "./footer-nav-column";
export default function Footer() {
  type socialIcon = {
    name: "facebook" | "instagram" | "twitter" | "youtube";
    href: string;
  };

  const socials: socialIcon[] = [
    { name: "facebook", href: "/facebook.svg" },
    { name: "instagram", href: "/instagram.svg" },
    { name: "twitter", href: "/mail.svg" },
    { name: "youtube", href: "/youtube.svg" },
  ];

  return (
    <footer className="content-grid py-10 text-black grid ">
      <section className="breakout flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] border-t pt-10">
        <aside className="flex items-center">
          <h2 className="text-6xl lg:text-9xl">
            <Link href="/">LOGO</Link>
          </h2>
        </aside>

        <FooterNavColumn title="About us">
          <ul className="hidden md:block">
            <li>
              <Link href="/about">About BRAND</Link>
            </li>
            <li>
              <Link href="#">Career</Link>
            </li>
            <li>
              <Link href="#">News</Link>
            </li>
            <li>
              <Link href="#">Accessability</Link>
            </li>
          </ul>
        </FooterNavColumn>
        <FooterNavColumn title="Get Help">
          <ul className="hidden md:block">
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="#">Customer Club</Link>
            </li>
            <li>
              <Link href="#">Terms and conditions</Link>
            </li>
            <li>
              <Link href="#">Privacy policy</Link>
            </li>
          </ul>
        </FooterNavColumn>
        <FooterNavColumn title="Socials">
          <ul className="flex gap-2 md:gap-4">
            {socials.map((item) => {
              return (
                <Link href={item.href} key={item.name}>
                  <DynamicIcon name={item.name} size={30} strokeWidth={1.5} />
                </Link>
              );
            })}
          </ul>
        </FooterNavColumn>

      </section>
    </footer>
  );
}
