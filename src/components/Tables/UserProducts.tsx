"use client";

import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";

interface Cart {
  title: string;
  dimension: string;
  price: number;
  share: number;
}

const UserProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userProducts, setUserProducts] = useState<Cart[] | null>([]);

  const userId = "cm2gkp79y00005v9x4tkyrdar";

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await fetch(`/api/products/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });

        const data = await response.json();
        setUserProducts(data);
      } catch (error) {}
    };

    fetchUserProducts();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (isLoading) {
    return <Loader />;
  }

  console.log(userProducts);

  return (
    <div className="grid grid-cols-1 gap-4 border-b-2 pb-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {/* {products.map(({ id, title, dimension, price }) => {
        return (
          <CardDataStats
            key={id}
            title={title}
            dimension={dimension!}
            price={price}
          />
        );
      })} */}
    </div>
  );
};

export default UserProducts;
