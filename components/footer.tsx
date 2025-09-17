import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  const socials = [
    { name: 'facebook', src: '/facebook.svg', href: '/' },
    { name: 'instagram', src: '/instagram.svg', href: '/' },
    { name: 'youtube', src: '/youtube.svg', href: '/' },
    { name: 'mail', src: '/mail.svg', href: '/' },
  ];

  return (
    <footer className="content-grid py-10 text-black grid grid-cols-4">

      <aside></aside>
      <section className="breakout grid grid-cols-4 border-t pt-10">
        <aside>
          {' '}
          <Image src="/logo" alt="logo" width={300} height={300} />
        </aside>

        <nav area-label="About" className="flex justify-center">
          <h3>About</h3>
          <ul>
            <Link href=""></Link>
          </ul>
        </nav>
        <nav area-label="Get Help" className="flex justify-center">
          <h3>Get help</h3>
          <ul>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="#">Customer Club</Link></li>
            <li><Link href="#">Terms and conditions</Link></li>
            <li><Link href="#">Privacy policy</Link></li>
          </ul>
        </nav>
        <nav area-label="Social media">
          <h3 className="text-center mb-8">Socials</h3>
          <ul className="flex flex-col items-center">
            {socials.map((item) => {
              return (
                <Link href={item.href} key={item.name}>
                  <Image src={item.src} alt={item.name} width={300} height={300} className="h-15" />
                </Link>
              );
            })}
          </ul>
        </nav>
      </section>
    </footer>
  );
}
