import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/OrdersList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kolet: Orders",
  description: "Orders Page: Kole Portal",
};

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
