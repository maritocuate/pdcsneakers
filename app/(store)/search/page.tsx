import ProductsGrid from "@/components/ProductsGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";

interface SearchPageProps {
  query: string;
}

async function SearchPage({ searchParams }: { searchParams: SearchPageProps }) {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  console.log(products);

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-center h-150">
        <h1 className="text-2xl font-bold">
          No products found for &quot;{query}&quot;
        </h1>
        <p className="text-gray-500">
          Please try again with a different search term.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl mb-6">
        <span className="text-gray-500">Search results for: </span>
        <span className="font-bold">{query}</span>
      </h2>
      <div className="flex flex-col">
        <div>
          <div>
            <ProductsGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
