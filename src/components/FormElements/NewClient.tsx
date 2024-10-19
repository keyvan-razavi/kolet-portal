"use client";

import React, { useState } from "react";

const NewClient = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleCreate = async (e: any) => {
    e.preventDefault();

    try {
      await fetch("/api/user/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, phoneNumber, address }),
      });
    } catch (error) {
      console.log("asfasdasd", error);
    }

    setUsername("");
    setPhoneNumber("");
    setPassword("");
    setAddress("");
  };
  return (
    <div className="mx-auto flex flex-col xsm:w-full sm:w-2/3 lg:w-1/2">
      <div className=" rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <h1 className="p-5 text-title-sm2 font-extrabold">ایجاد مشتری جدید</h1>
        <form action="/dashboard/user" onSubmit={handleCreate}>
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                نام کاربری
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="نام مشتری"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                شماره تماس
              </label>
              <input
                maxLength={11}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="number"
                placeholder="شماره تماس مشتری"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                آدرس
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="آدرس مشتری"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                رمز ورود
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="رمز ورودی که به مشتری میدهید"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <button className=" mt-10 flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              ایجاد
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewClient;
