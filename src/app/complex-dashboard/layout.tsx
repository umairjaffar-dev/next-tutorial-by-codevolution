import React from "react";

const ComplexDashboardLayout = ({
  children,
  notifications,
  users,
  login,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div className="w-full h-full grid grid-cols-[5fr_5fr] gap-1">
      <div className="w-full h-full grid grid-rows-[5fr_5fr] gap-1">
        <div>{users}</div>
        <div>{notifications}</div>
      </div>
      <div>{children}</div>
    </div>
  ) : (
    <div className="w-full h-full">{login}</div>
  );
};

export default ComplexDashboardLayout;
