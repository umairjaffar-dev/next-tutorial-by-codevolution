import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <Card>
      <div className="flex justify-center gap-2 items-center">
        <p>View all Notifications</p>
        <Link href="/complex-dashboard/archived" className="text-blue-500 underline">Archived</Link>
      </div>
    </Card>
  );
};

export default Notifications;
