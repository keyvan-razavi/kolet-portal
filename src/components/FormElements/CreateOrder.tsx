"use client";

import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import Link from "next/link";
import { useState } from "react";

interface Client {
  name: string;
  phone: number;
}

const CreateOrder = () => {
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  return (
    <div className="min-h-svh w-full" dir="rtl">
      <div className="mx-auto flex flex-col sm:w-full lg:w-1/2">
        <div className="rounded-sm border border-stroke bg-white font-Vazir shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className=" font-medium text-black dark:text-white">
              جزئیات ثبت سفارش
            </h3>
          </div>
          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    نام خریدار
                  </label>
                  <input
                    onChange={(e) => setClientName(e.target.value)}
                    required
                    type="text"
                    placeholder="نام عامل خرید"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    شماره تماس
                  </label>
                  <input
                    onChange={(e) => setClientPhone(e.target.value)}
                    required
                    type="number"
                    placeholder="۰۱۲۳۴۵۶۷۸۹۰"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="mb-4.5 h-fit w-full gap-2 rounded border-2 border-dashed border-stroke border-opacity-10 p-2 ">
                <div className="mb-2 gap-2 border-b-2 border-stroke border-opacity-10 pb-2 xl:flex">
                  <label className=" flex w-full items-center pr-5 text-lg font-medium  text-black dark:text-white xl:w-2/5 xl:pr-0">
                    آجر سفال ۹*۲۰*۲۵
                  </label>

                  <div className="my-2 w-full xl:m-0 xl:w-2/5">
                    <SelectGroupOne />
                  </div>

                  <div className="w-full xl:w-1/5">
                    <input
                      required
                      type="number"
                      placeholder="تعداد"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                {/* <div className="mb-2 gap-2 border-b-2 border-stroke border-opacity-10 pb-2 xl:flex">
                  <label className=" flex w-full items-center pr-5 text-lg font-medium  text-black dark:text-white xl:w-2/5 xl:pr-0">
                    آجر سفال ۱۵*۲۰*۲۵
                  </label>

                  <div className="my-2 w-full xl:m-0 xl:w-2/5">
                    <SelectGroupOne />
                  </div>

                  <div className="w-full xl:w-1/5">
                    <input
                      required
                      type="number"
                      placeholder="تعداد"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mb-2 gap-2 border-b-2 border-stroke border-opacity-10 pb-2 xl:flex">
                  <label className=" flex w-full items-center pr-5 text-lg font-medium  text-black dark:text-white xl:w-2/5 xl:pr-0">
                    آجر سفال ۹*۲۰*۲۰
                  </label>

                  <div className="my-2 w-full xl:m-0 xl:w-2/5">
                    <SelectGroupOne />
                  </div>

                  <div className="w-full xl:w-1/5">
                    <input
                      required
                      type="number"
                      placeholder="تعداد"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div> */}
                <div className="mb-0 gap-2 xl:flex">
                  <label className="flex w-full items-center pr-5 text-lg font-medium text-black dark:text-white xl:w-2/5 xl:pr-0">
                    آجر سفال ۱۵*۲۰*۲۰
                  </label>

                  <div className="my-2 w-full xl:m-0 xl:w-2/5">
                    <SelectGroupOne />
                  </div>

                  <div className="w-full xl:w-1/5">
                    <input
                      required
                      type="number"
                      placeholder="تعداد"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label className=" mb-3 block text-sm  text-black dark:text-white">
                  توضیحات
                </label>
                <textarea
                  rows={3}
                  placeholder="توضیحات خود را یادداشت نمایید"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <Link href={"/orders/client-orders"}>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  ثبت سفارش
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </DefaultLayout>
  );
};

export default CreateOrder;
