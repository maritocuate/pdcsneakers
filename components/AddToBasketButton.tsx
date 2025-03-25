"use client";
import { useEffect, useState } from "react";
import { ProductTypes } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { Button } from "./ui/button";

interface AddToBasketButtonProps {
  product: ProductTypes;
  disabled?: boolean;
}

function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {
  const { addItem, getItemCount, removeItem } = useBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-8 h-8"
        onClick={() => removeItem(product._id)}
      >
        -
      </Button>
      <span className="text-sm text-gray-500">{itemCount}</span>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-8 h-8"
        onClick={() => addItem(product)}
      >
        +
      </Button>
    </div>
  );
}

export default AddToBasketButton;
