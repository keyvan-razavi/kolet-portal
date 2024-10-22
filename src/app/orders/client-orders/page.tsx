import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import OrdersList from "@/components/Tables/OrdersList";
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
        <OrdersList />
      </div>
    </DefaultLayout>
  );
};

export default ClientOrders;
