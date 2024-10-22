"use client";

import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import moment from "moment";
import jMoment from "moment-jalaali";
import { orders } from "../../../public/orders/orders";

interface User {
  id: string;
  name: string;
  phone: string;
  address: string;
  role: any;
  updatedAt: string;
  orders: Order[];
}

interface Order {
  id: string;
  status: string;
  userId: string;
  updatedAt: string;
  createdAt: string;
}

moment.locale("fa"); // Set the locale to Persian

const ClientsList: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/user/all-users");
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        // setError(error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 flex justify-between">
          <div>
            <h4 className="text-title-sm2 font-bold text-black dark:text-white">
              مدیریت مشتری ها
            </h4>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
            <div className="p-2.5 xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base xl:pr-5">
                مشتری
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                تاریخ آخرین سفارش
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                آدرس
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                شماره تماس
              </h5>
            </div>
          </div>

          {users!.map((user) => (
            <div className="grid grid-cols-3 sm:grid-cols-4" key={user.id}>
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="hidden font-medium text-black dark:text-white sm:block">
                  {user.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                {user.orders.map((o: Order) => (
                  <p key={o.id}>
                    {jMoment(o.createdAt).format("jYYYY/jMM/jDD")}
                  </p>
                ))}
                <p className="font-medium text-black dark:text-white">
                  {/* {jMoment(user.updatedAt).format("jYYYY/jMM/jDD")} */}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium text-meta-3">{user.address}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="font-medium text-meta-5">{user.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsList;
