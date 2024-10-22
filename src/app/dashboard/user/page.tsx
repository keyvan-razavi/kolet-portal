import React from "react";
import CardDataStats from "@/components/CardDataStats";
import SubmitDetails from "@/components/FormElements/CreateOrder";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import { products } from "../../../../public/products/products";
import UserProducts from "@/components/Tables/UserProducts";

export const metadata: Metadata = {
  title: "Kolet: User Dashboard",
  description: "User Dashboard Page - Kole Portal",
};

const UserDashboard: React.FC = async () => {
  return (
    <DefaultLayout>
      <div className="flex min-h-svh flex-col gap-5 font-Vazir" dir="rtl">
        <UserProducts />
        <h1 className="m-0 pr-5 text-title-md">ثبت سفارش</h1>
        <SubmitDetails />
      </div>
    </DefaultLayout>
  );
};

export default UserDashboard;
