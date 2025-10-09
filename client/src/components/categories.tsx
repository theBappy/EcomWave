"use client";

import { categories } from "@/data/categories";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selectedCategory = searchParams.get("category");

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, {scroll: false});
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md text-gray-800 ${
            category.slug === selectedCategory ? "bg-background text-primary" : "text-foreground"
          }`}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
