import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableFour from "@/components/Tables/TableFour";
import React from "react";

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
