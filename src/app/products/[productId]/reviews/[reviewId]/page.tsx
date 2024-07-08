import React from "react";

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      <h1 className="w-full text-center">
        Reviews {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
};

export default ReviewDetail;
