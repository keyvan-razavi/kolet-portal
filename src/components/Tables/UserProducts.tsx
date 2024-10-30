"use client";

import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";
import CardDataStats from "../CardDataStats";

interface Cart {
  id: string;
  product: any;
  count: number;
}

const UserProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userProducts, setUserProducts] = useState<Cart[] | null>([]);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await fetch(`/api/shares`);

        const data = await response.json();

        setUserProducts(data);
        // console.log("user products::", userProducts![0].product!.name);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchUserProducts();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 border-b-2 pb-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {userProducts ? (
        userProducts?.map((p) => {
          return (
            <CardDataStats
              key={p.id}
              title={p.product?.name}
              dimension={p.product?.dimension}
              price={p.product?.price}
              amount={p?.count}
            />
          );
        })
      ) : (
        <p>no products found</p>
      )}
    </div>
  );
};

export default UserProducts;
