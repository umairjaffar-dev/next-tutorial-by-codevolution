import Link from "next/link";
import React from "react";

const ProductDetail = ({ params }: { params: { productId: string } }) => {
  return (
    <div className="p-4 grid grid-rows-[auto_1fr]">
      <div className="flex justify-end">
        <Link
          href="/products"
          className="px-2 py-1 bg-black text-white rounded-md"
        >
          Go Back
        </Link>
      </div>
      <div className="w-full">
        <p className="w-full text-center">
          This is the detail page of product {params.productId}.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
