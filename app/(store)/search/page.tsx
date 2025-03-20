interface SearchPageProps {
  query: string;
}

async function SearchPage({ searchParams }: { searchParams: SearchPageProps }) {
  const { query } = await searchParams;

  return <div>SearchPage {query}</div>;
}

export default SearchPage;
