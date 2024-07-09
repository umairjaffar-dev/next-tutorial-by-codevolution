import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type MetadataProps = {
  params: {
    productId: string;
  };
};

// Dynamic meta data to see the detial of each product.
export const generateMetadata = async ({
  params,
}: MetadataProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`iPhone ${params.productId}`), 3000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetail = ({ params }: { params: { productId: string } }) => {
  if (parseInt(params.productId) > 5) {
    notFound();
  }
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
