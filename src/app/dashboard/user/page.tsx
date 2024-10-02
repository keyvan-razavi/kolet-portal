"use client";

import React from "react";
import CardDataStats from "@/components/CardDataStats";
import { users } from "../../../../public/users/users";
import SubmitDetails from "@/components/Dashboards/user-dashboard/SubmitDetails"
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const UserDashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="font-Vazir flex min-h-svh flex-col gap-5" dir="rtl">
        <h1 className="m-0 pr-5 text-title-md">محصولات موجود برای شما</h1>
        <div className="grid grid-cols-1 gap-4 border-b-2 pb-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {users[0].products.map(
            ({ id, title, dimension, price, availableAmount }) => {
              return (
                <CardDataStats
                  key={id}
                  title={title}
                  dimension={dimension}
                  price={price}
                  amount={availableAmount}
                />
              );
            },
          )}
        </div>
        <h1 className="m-0 pr-5 text-title-md">ثبت سفارش</h1>

        <SubmitDetails />
      </div>
    </DefaultLayout>
  );
};

export default UserDashboard;
