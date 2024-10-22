import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import OrdersList from "@/components/Tables/OrdersList";

export const metadata: Metadata = {
  title: "Kolet: Orders-management",
  description: "Orders-management - Kole Portal",
};

const OrdersManagement = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="مدیریت سفارشها" />
      <div className="min-h-svh xl:max-w-full">
        <OrdersList />
      </div>
    </DefaultLayout>
  );
};

export default OrdersManagement;
