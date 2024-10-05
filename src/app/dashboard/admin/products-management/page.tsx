import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
// import { users } from "../../../../../public/users/users";
import { products } from "../../../../../public/products/products";
import CardDataStats from "@/components/CardDataStats";

const ProductsManagement = () => {
  return (
    <DefaultLayout>
      <div className="flex min-h-svh flex-col gap-5 font-Vazir" dir="rtl">
        Product Management
        <div className="grid grid-cols-1 gap-4 border-b-2 pb-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {products.map(({ id, title, dimension, price }) => {
            return (
              <CardDataStats
                key={id}
                title={title}
                dimension={dimension}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductsManagement;
