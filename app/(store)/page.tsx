import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
import SaleBanner from "@/components/SaleBanner";
export default async function Home() {
  const products = await getAllProducts();

  return (
    <>
      <SaleBanner />
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <ProductsView products={products} />
      </div>
    </>
  );
}
