import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ProductsList from "@/components/Tables/ProductsList";

export const metadata: Metadata = {
  title: "Kolet: Products-Management",
  description: "Products Management - Kole Portal",
};

const ProductsManagement = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="مدیریت محصولات" />
      <div className="min-h-svh xl:max-w-full">
        <ProductsList />
      </div>
    </DefaultLayout>
  );
};

export default ProductsManagement;
