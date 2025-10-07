
import { products } from "@/data/products";
import Categories from "./categories";
import ProductCard from "./product-card";
import Link from "next/link"
import Filters from "./filters";

const ProductsList = ({category, params}: {category:string, params: "homepage" | "products"}) => {
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && (
        <Filters />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link href={category ? `/product/?category=${category}}` : "/products"}
      className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductsList;
