import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const ArchivedNotification = () => {
  return (
    <Card>
      <div className="flex justify-center gap-2 items-center">
        <p>Archived Notifications</p>
        <Link href="/complex-dashboard" className="text-blue-500 underline">dashboard</Link>
      </div>
    </Card>
  );
};

export default ArchivedNotification;
