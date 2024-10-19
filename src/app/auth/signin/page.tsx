"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface User {
  id: string;
  name: string;
  phone: string;
  role: string;
}

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if(isLoading) {
      setError(null)
    }
    setIsLoading(true);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, phoneNumber }),
      });

      if (!response.ok) {
        setIsLoading(false);
        if (isLoading) setError("try again!");
      }

      const responseData = await response.json();

      if (responseData) {
        setIsLoading(false);
        setUser(responseData);
      }
    } catch (error) {
      console.log("error sending request: ", error);

      return null;
    }

    if (user?.role == "USER") {
      router.push("/dashboard/user");
    } else if (user?.role == "ADMIN") {
      router.push("/dashboard/admin");
    } else {
      router.push("/");
      setIsLoading(false);
      setError("Wrong Credentials, try again");
    }

    setPhoneNumber("");
    setPassword("");
  };

  return (
    <>
      {/* <Breadcrumb pageName="ورود به پورتال" /> */}

      <div className="mt-20 min-h-svh w-full font-Vazir" dir="rtl">
        <div className="mx-auto flex flex-col xsm:w-full sm:w-2/3 lg:w-1/2">
          {/* <!-- Sign In Form --> */}

          <div className=" rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                اطلاعات کاربری
              </h3>
            </div>
            <form action="/dashboard/user" onSubmit={(e) => handleLogin(e)}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    شماره تماس
                  </label>
                  <input
                    maxLength={11}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="text"
                    placeholder="شماره تماس با اعداد انگلیسی"
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
                    placeholder="کلمه عبوری داده شده توسط ادمین"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                {error && !isLoading ? (
                  <div className="mt-5 flex items-center justify-center text-rose-500">
                    <p>{error}</p>
                  </div>
                ) : (
                  <div className="mt-5 flex items-center justify-center text-rose-500">
                    <p className="mt-6"></p>
                  </div>
                )}

                <div className=" flex h-full items-center justify-center bg-white dark:bg-transparent">
                  {isLoading ? (
                    <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
                  ) : (
                    <button className="mt-10 flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                      ورود
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
