import { ProductTypes } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";

function ProductThumb({ product }: { product: ProductTypes }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Link
      href={`/products/${product.slug?.current}`}
      className={`flex flex-col ${isOutOfStock ? "opacity-50" : ""}`}
    >
      {product.image && (
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={imageUrl(product.image).url()}
            alt={product.name || "Product Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {isOutOfStock && (
        <div className="inset-0 flex items-center justify-center bg-black/50 text-white">
          Out of Stock
        </div>
      )}

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-sm text-gray-500">${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductThumb;
