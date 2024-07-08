"use client";
import React from "react";

const CatchAllSegment = ({ params }: { params: { slug: Array<string> } }) => {
  console.log("slug", params.slug);

  if (params.slug.length === 2) {
    return (
      <div>
        view items{" "}
        <span className="text-red-600 underline">{params.slug[0]}</span> for a
        shop <span className="text-red-600 underline">{params.slug[1]}</span>
      </div>
    );
  }
  if (params.slug.length === 1) {
    return (
      <div>
        view items
        <span className="text-red-600 underline">{params.slug[0]}</span> for a
        shop
        <span className="text-red-600 underline">{params.slug[0]}</span>
      </div>
    );
  }
  return <div>CatchAllSegment for shop</div>;
};

export default CatchAllSegment;
