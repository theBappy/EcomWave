import ProductsList from "@/components/product-list";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="featured-product" fill />
      </div>
      <ProductsList params="homepage" category={category} />
    </div>
  );
};

export default Homepage;
