"use client";
import React from "react";

const ErrorBoundary = ({
  error,
//   reset,
}: {
  error: Error;
//   reset: () => void;
}) => {
  return (
    <div className="w-full flex justify-center items-start gap-2">
      <p className="px-2 py-1 mt-2 bg-red-600 rounded-md text-center text-white">
        {error.message}{" "}
      </p>
      {/* <span
        onClick={reset}
        className="text-sm bg-gray-200 rounded-md px-2 py-1 text-gray-800 mt-2 cursor-pointer"
      >
        Reset
      </span> */}
    </div>
  );
};

export default ErrorBoundary;
