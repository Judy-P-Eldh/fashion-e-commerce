import { fetchProducts } from '@/lib/data/productdata';
import { Product } from '@/lib/interfaces/product';
import Form from 'next/form';
import Image from 'next/image';


export default async function Home() {
  const products = await fetchProducts(10);

  const firstForProducts = Array.isArray(products) ? products.slice(0, 4) : null;

  return (
    <main className="content-grid">
      <section className="full-width inherit grid bg-[#D6CCC2] py-10">
        <Form className="breakout" action="submit">
        <h2 className='text-2xl mb-5 font-courier-prime'>Sign up for our newsletter and get 10% off your first order</h2>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input type="text" className='bg-white' />
          <button>Sign me up</button>
        </Form>
      </section>
      <section className="content py-10">
        <h2 className='content text-center text-6xl'>Browse our best sellers</h2>
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
