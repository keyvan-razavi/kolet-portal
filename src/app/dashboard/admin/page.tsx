import React from "react";
import CardDataStats from "@/components/CardDataStats";
import { users } from "../../../../public/users/users";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import TableThree from "@/components/Tables/TableThree";

export const metadata: Metadata = {
  title: "Kolet: Admin Dashboard",
  description: "Admin Dashboard Page - Kole Portal",
};

const AdminDashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="flex min-h-svh flex-col gap-5 font-Vazir" dir="rtl">
        <h1 className="m-0 pr-5 text-title-md font-extrabold">
          محصولات موجود:
        </h1>
        <div className="grid grid-cols-1 gap-4 border-b-2 pb-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {users[0].products.map(
            ({ id, title, dimension, price, availableAmount }) => {
              return (
                <CardDataStats
                  key={id}
                  title={title}
                  dimension={dimension}
                  price={price}
                />
              );
            },
          )}
        </div>
        <h1 className="m-0 pr-5 text-title-md font-extrabold">
          سفارشهای اخیر:
        </h1>
        <div>
          <TableThree/>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AdminDashboard;
