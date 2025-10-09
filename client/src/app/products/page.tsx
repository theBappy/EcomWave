import ProductsList from "@/components/product-list";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="mt-10">
      <ProductsList params="products" category={category} />
    </div>
  );
};

export default ProductsPage;
