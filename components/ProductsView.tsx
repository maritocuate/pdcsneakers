import { ProductTypes } from "@/sanity.types";
import ProductsGrid from "./ProductsGrid";
interface ProductViewProps {
  products: ProductTypes[];
}

function ProductsView({ products }: ProductViewProps) {
  return (
    <div className="flex flex-col">
      <div>
        <div>
          <ProductsGrid products={products} />
        </div>
      </div>
    </div>
  );
}

export default ProductsView;
