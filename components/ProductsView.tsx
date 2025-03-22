import { Category, ProductTypes } from "@/sanity.types";
import ProductsGrid from "./ProductsGrid";
import { CategorySelectorComponent } from "./ui/category-selector";

interface ProductViewProps {
  products: ProductTypes[];
  categories: Category[];
}

function ProductsView({ products, categories }: ProductViewProps) {
  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center justify-center mb-8">
        <CategorySelectorComponent categories={categories} />
      </div>

      <div>
        <div>
          <ProductsGrid products={products} />
        </div>
      </div>
    </div>
  );
}

export default ProductsView;
