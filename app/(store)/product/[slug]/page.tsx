import AddToBasketButton from "@/components/AddToBasketButton";
import { imageUrl } from "@/lib/imageUrl";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { PortableText } from "next-sanity";
import Image from "next/image";
async function ProductPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  const isOutOfStock = product?.stock != null && product?.stock <= 0;

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white backdrop-blur-sm">
              <p className="text-2xl font-semibold">Agotado</p>
            </div>
          )}
          {product?.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name || "Product Image"}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight">
              {product?.name}
            </h2>
            <p className="prose text-lg text-gray-600 leading-relaxed">
              <PortableText value={product?.description} />
              {product?.description}
            </p>
            <p className="text-3xl font-bold text-emerald-600">
              ${product?.price}
            </p>

            <AddToBasketButton product={product} disabled={isOutOfStock} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
