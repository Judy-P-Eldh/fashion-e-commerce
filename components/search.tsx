import SearchButton from './searchbutton';

export default function Search({ query }: { query?: string }) {
  return (
    <form action="/search">
      <input type="text" defaultValue={query} name="query" />
       <SearchButton />
    </form>
  );
}
