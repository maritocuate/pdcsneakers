import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
import SaleBanner from "@/components/SaleBanner";
import { getAllCategories } from "@/sanity/lib/categories/getAllCategories";
export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <>
      <SaleBanner />
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        <ProductsView products={products} categories={categories} />
      </div>
    </>
  );
}
