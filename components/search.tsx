import SearchButton from './searchbutton';
import Form from 'next/form';
 
export default function Search({ query, btn = true }: { query?: string; btn?: boolean }) {
  return (
    <Form action="/search">
      <label htmlFor="query">Search</label>
      <input type="text" id='query' defaultValue={query} name="query" className="bg-light border-1" />
      {btn &&  <SearchButton />}
    </Form>
  );
}
 