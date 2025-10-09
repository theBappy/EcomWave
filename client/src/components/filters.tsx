"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-primary my-6">
      <span className="">Sort by:</span>
      <select
        name="sort"
        id="sort"
        className="ring ring-gray-200 shadow-md p-1 rounded-sm"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option className="text-gray-600" value="newest">Newest</option>
        <option className="text-gray-600" value="oldest">Oldest</option>
        <option className="text-gray-600" value="asc">Price:Low to High</option>
        <option className="text-gray-600" value="desc">Price:High to Low</option>
      </select>
    </div>
  );
};

export default Filters;
