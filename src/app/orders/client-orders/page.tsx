import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/TableThree";
import React from "react";

const ClientOrders = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="سفارشها" />
      <div className="min-h-svh xl:max-w-full">
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default ClientOrders;
