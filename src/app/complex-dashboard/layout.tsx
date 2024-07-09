import React from "react";

const ComplexDashboardLayout = ({
  children,
  notifications,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full grid grid-cols-[5fr_5fr] gap-1">
      <div className="w-full h-full grid grid-rows-[5fr_5fr] gap-1">
        <div>{users}</div>
        <div>View Notifications</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ComplexDashboardLayout;
