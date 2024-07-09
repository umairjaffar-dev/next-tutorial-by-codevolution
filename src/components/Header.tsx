import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-16 border-b rounded-md shadow-sm grid grid-cols-[auto_1fr] py-1 px-4">
      <div className="flex justify-center items-center">
        <Link href="/">
          <span className="font-bold bg-gray-100 px-2 py-1  text-fuchsia-700 text-lg font-serif">
            NextJs
          </span>
        </Link>
      </div>
      <div className="flex justify-end items-center gap-3">
        <Link
          href="/about"
          className="border border-gray-200 px-4 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          About
        </Link>
        <Link
          href="/products"
          className="border border-gray-200 px-4 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Products
        </Link>
        <Link
          href="/shop/a"
          className="border border-gray-200 px-4 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Shop
        </Link>
        <Link
          href="/login"
          className="border border-green-200 px-4 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="border border-green-200 px-4 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
