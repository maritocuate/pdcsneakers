import { ProductTypes } from "@/sanity.types";

interface ProductViewProps {
  products: ProductTypes[];
}

function ProductsView({ products }: ProductViewProps) {
  return (
    <div className="flex flex-col">
      <div>
        <div>
          <hr className="w-1/2" />
        </div>
      </div>
    </div>
  );
}

export default ProductsView;
