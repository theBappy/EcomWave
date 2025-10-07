import ProductsList from "@/components/product-list";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div>
      <ProductsList params="products" category={category} />
    </div>
  );
};

export default ProductsPage;
