import { fetchProducts } from '@/lib/data/productdata';
import { Product } from '@/lib/interfaces/product';
import Form from 'next/form';
import Image from 'next/image';

export default async function Home() {
  const products = await fetchProducts(10);

  const firstForProducts = Array.isArray(products) ? products.slice(0, 4) : null;

  return (
    <main className="full-width ">
      <section className="content-grid">
        <h2>Sign up for our newsletter</h2>
        <Form action="submit">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input type="text" />
        </Form>
      </section>
      <section className="full-width">
        <h2>Best sellers</h2>
        <ul>
          {firstForProducts?.map((p: Product) => {
            return (
              <li key={p.id} className="text-white">
                {p.title}
                <Image src={p.images[0]} alt={p.description} height={600} width={300}></Image>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
