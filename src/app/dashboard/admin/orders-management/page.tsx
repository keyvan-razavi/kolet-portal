import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";

const OrdersManagement = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="سفارشها" />
      <div className="min-h-svh xl:max-w-full">
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default OrdersManagement;
