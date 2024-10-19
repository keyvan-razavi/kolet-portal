import NewClient from "@/components/FormElements/NewClient";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ClientsList from "@/components/Tables/ClientsList";
import React from "react";

const UserManagement = () => {

  return (
    <DefaultLayout>
      <div className="flex min-h-svh flex-col gap-5 font-Vazir" dir="rtl">
        <NewClient />
        <ClientsList />
      </div>
    </DefaultLayout>
  );
};

export default UserManagement;
