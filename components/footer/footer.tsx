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
      <section className="breakout flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:border-t border-dark lg:pt-10">
        <aside className="flex items-center justify-center lg:justify-start mt-8">
          <h2 className="text-6xl lg:text-9xl py-1">
            <Link href="/">LOGO</Link>
          </h2>
        </aside>

        <FooterNavColumn title="About us" extraContent={true}>
          <ul className="hidden lg:block">
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
              <Link href="#">Accessibility</Link>
            </li>
          </ul>
        </FooterNavColumn>
        <FooterNavColumn title="Get Help" extraContent={true}>
          <ul className="hidden lg:block">
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
          <ul className="flex gap-2 lg:gap-4">
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
