import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full h-full border border-green-500 grid grid-cols-[2fr_8fr]">
      <div className="border-e rounded-md border-emerald-600">
        <h1 className="w-full text-center">Products Filters</h1>
      </div>
      {children}
    </div>
  );
};

export default layout;
