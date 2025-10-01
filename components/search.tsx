import SearchButton from "./searchbutton";
import Form from "next/form";

export default function Search({
  query,
  btn = true,
}: {
  query?: string;
  btn?: boolean;
}) {
  return (
    <Form action="/search">
      <label htmlFor="query" className="sr-only">Search</label>
      <input
        type="text"
        id="query"
        defaultValue={query}
        name="query"
        placeholder="Search"
        className="input-field mb-0"
      />
      {btn && <SearchButton />}
    </Form>
  );
}
