import Form from 'next/form';

export default function Search({ query, btn = true }: { query?: string; btn?: boolean }) {
  return (
    <Form action="/search">
      <input type="text" defaultValue={query} name="search-input" className="bg-white border-1" />
      {btn && <button type="submit">search</button>}
    </Form>
  );
}
