import Image from "next/image";
import Link from "next/link";
import { Bell, Home } from "lucide-react";
import SearchBar from "./search-bar";
import ShoppingCartIcon from "./shopping-cart-icon";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b mt-2 border-gray-200 pb-4">
      {/* LEFT */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="ecom-wave"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-[#ff7817] text-md font-medium tracking-wider">
          ECOMWAVE.
        </p>
      </Link>
      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <ThemeToggle />
        <Link href="/">
          <Home className="w-4 h-4 text-foreground"/>
        </Link>
        <Bell className="w-4 h-4 text-foreground"/>
        <ShoppingCartIcon />
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;