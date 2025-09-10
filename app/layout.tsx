import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/navigation';

//uppdate when we have a company/brand name
export const metadata: Metadata = {
  title: '[Brand name] fashion e-commerce',
  description:
    'Buy clothes online at [Brand Name]. Affordable fashion, fast shipping, and a wide selection of styles for every occasion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}</body>
    </html>
  );
}
