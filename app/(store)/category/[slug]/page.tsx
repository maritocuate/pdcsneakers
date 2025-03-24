import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory";
import { getAllCategories } from "@/sanity/lib/categories/getAllCategories";
import ProductsView from "@/components/ProductsView";

async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  const categories = await getAllCategories();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{slug}</h1>
      <ProductsView products={products} categories={categories} />
    </div>
  );
}

export default CategoryPage;
