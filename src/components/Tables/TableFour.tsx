"use client";

import { BRAND } from "@/types/brand";
import Image from "next/image";
import DropdownDefault from "../Dropdowns/DropdownDefault";

const brandData: BRAND[] = [
  {
    name: "خریدار شماره ۱",
    lastOrderStatus: 'عدم تایید',
    revenues: "5,768",
    sales: 590,
    conversion: ' - / - / -',
  },
  {
    name: "خریدار شماره ۲",
    lastOrderStatus: 'تایید شده',
    revenues: "4,635",
    sales: 467,
    conversion: ' - / - / -',
  },
  {
    name: "خریدار شماره ۳",
    lastOrderStatus: 'در انتظار تایید',
    revenues: "4,290",
    sales: 420,
    conversion: ' - / - / -',
  },
  {
    name: "خریدار شماره ۴",
    lastOrderStatus: 'تایید شده',
    revenues: "3,580",
    sales: 389,
    conversion: ' - / - / -',
  },
  {
    name: "خریدار شماره ۵",
    lastOrderStatus: 'عدم تایید',
    revenues: "6,768",
    sales: 390,
    conversion: ' - / - / -',
  },
];

const TableFour: React.FC = () => {
  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 flex justify-between">
          <div>
            <h4 className="text-title-sm2 font-bold text-black dark:text-white">
              مدیریت مشتری ها
            </h4>
          </div>
          {/* <DropdownDefault /> */}
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
            <div className="p-2.5 xl:p-4">
              <h5 className="text-sm font-medium xl:pr-5 uppercase xsm:text-base">
                مشتری
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                وضعیت آخرین سفارش
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
              سهمیه باقی مانده
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                عملیات
              </h5>
            </div>
          </div>

          {brandData.map((brand, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-4 ${
                key === brandData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="hidden font-medium text-black dark:text-white sm:block">
                  {brand.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium text-black dark:text-white">
                  {brand.lastOrderStatus}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium text-meta-3">{brand.revenues}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="font-medium text-meta-5">{brand.conversion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableFour;
