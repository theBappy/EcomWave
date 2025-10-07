"use client";

import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });
  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            fill
            src={product.images[productTypes.color]}
            alt={product.name}
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      {/* product details */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* product types */}
        <div className="flex items-center gap-4 text-xs">
          {/* sizes */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
              className="ring ring-gray-300 rounded-md px-2 py-1"
              name="size"
              id="size"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* colors */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                  key={color}
                  className={`cursor-pointer border-1 ${
                    productTypes.color === color
                      ? "border-gray-400"
                      : "border-gray-200"
                  } p-[2px] rounded-full`}
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{
                      backgroundColor: color,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* price and add to cart button */}
        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <button className="ring ring-gray-200 shadow-lg rounded-md py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
