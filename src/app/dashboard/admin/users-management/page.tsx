import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableFour from "@/components/Tables/TableFour";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kolet: Users-Management",
  description: "Users Management - Kole Portal",
};

const UserManagement = () => {
  return (
    <DefaultLayout>
      <div className="flex min-h-svh flex-col gap-5 font-Vazir" dir="rtl">
        <TableFour />
      </div>
    </DefaultLayout>
  );
};

export default UserManagement;
