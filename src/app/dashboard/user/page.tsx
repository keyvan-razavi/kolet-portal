import React from "react";
import CardDataStats from "@/components/CardDataStats";
import SubmitDetails from "@/components/Dashboards/user-dashboard/SubmitDetails";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import prisma from "@/lib/db";
import { products } from "../../../../public/products/products";

export const metadata: Metadata = {
  title: "Kolet: User Dashboard",
  description: "User Dashboard Page - Kole Portal",
};

const UserDashboard: React.FC = async () => {
  return (
    <DefaultLayout>
      <div className="flex min-h-svh flex-col gap-5 font-Vazir" dir="rtl">
        <div className="grid grid-cols-1 gap-4 border-b-2 pb-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {products.map(({ id, title, dimension, price }) => {
            return (
              <CardDataStats
                key={id}
                title={title}
                dimension={dimension!}
                price={price}
              />
            );
          })}
        </div>
        <h1 className="m-0 pr-5 text-title-md">ثبت سفارش</h1>
        <SubmitDetails />
      </div>
    </DefaultLayout>
  );
};

export default UserDashboard;
