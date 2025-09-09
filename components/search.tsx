import Form from 'next/form';

export default function search({ query }: { query?: string }) {
  return (
    <Form action="/search">
      <input type="text" defaultValue={query} name="search-input" />
      <button type="submit">search</button>
    </Form>
  );
}
