import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full h-full grid grid-cols-[3fr_7fr]">
      <div className="flex justify-center items-center border-e-2 border-e-blue-400 rounded-md">
        <p> Auth Layout</p>
      </div>
      <div className="bg-gray-50 p-2">{children}</div>
    </div>
  );
};

export default AuthLayout;
