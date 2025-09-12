import { fetchProducts } from '@/lib/data/productdata';
import { Product } from '@/lib/interfaces/product';
import Form from 'next/form';
import Image from 'next/image';

export default async function Home() {
  const products = await fetchProducts(10);

  const firstForProducts = Array.isArray(products) ? products.slice(0, 4) : null;

  return (
    <main className="content-grid">
      <section className="full-width bg-[#D6CCC2]">
        <h2>Sign up for our newsletter</h2>
        <Form action="submit">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input type="text" />
        </Form>
      </section>
      <section className="breakout inherit">
        <h2>Best sellers</h2>
        <ul className="col-span-full flex justify-between">
          {firstForProducts?.map((p: Product) => {
            return (
              <li key={p.id} className="text-center">
                <Image src={p.images[0]} alt={p.description} height={600} width={300}></Image>
                {p.title}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
