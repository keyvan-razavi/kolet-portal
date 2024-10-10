import React from "react";

const Login = () => {
  return (
    <>
      {/* <Breadcrumb pageName="ورود به پورتال" /> */}

      <div className="mt-20 min-h-svh w-full font-Vazir" dir="rtl">
        <div className="mx-auto flex flex-col sm:w-full lg:w-1/2">
          {/* <!-- Sign In Form --> */}

          <div className=" rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                اطلاعات کاربری
              </h3>
            </div>
            <form action="/dashboard/user">
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    نام کاربری
                  </label>
                  <input
                    type="text"
                    placeholder="نامی که توسط ادمین به شما داده شده را وارد نمایید"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    رمز ورود
                  </label>
                  <input
                    type="password"
                    placeholder="کلمه عبوری که توسط ادمین به شما داده شده را وارد نمایید"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <button className=" mt-10 flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  ورود
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
