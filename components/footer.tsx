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
    <footer>
      <aside></aside>

      <nav className='grid grid-cols-4 gap-4'>
        <Image src="/mail.svg" alt="logo" width={300} height={300} />
        <section>
          <h3>About</h3>
          <ul>
            <Link href=""></Link>
          </ul>
        </section>
        <section>
          <h3>Get help</h3>
          <ul>
            <Link href=""></Link>
          </ul>
        </section>
        <section>
          <h3 className='text-center'>Socials</h3>
          <ul>
            {socials.map((item) => {
              return (
                <Link href={item.href} key={item.name}>
                  <Image src={item.src} alt={item.name} width={300} height={300} className='h-15'/>
                </Link>
              );
            })}
          </ul>
        </section>
      </nav>
    </footer>
  );
}
