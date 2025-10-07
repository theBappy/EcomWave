import ProductsList from "@/components/product-list"
import Image from "next/image"

const Homepage = () => {
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="featured-product" fill />
      </div>
      <ProductsList />
    </div>
  )
}

export default Homepage