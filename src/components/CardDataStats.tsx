import React from "react";

interface CardDataStatsProps {
  title: string;
  dimension: string;
  price: number;
  amount?: number;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  dimension,
  price,
  amount,
}) => {
  return (
    <div className="cursor-pointer rounded-sm border border-stroke bg-white px-5 py-6 font-Vazir shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex w-full items-center justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {title}
          </h4>
          <span className="text-sm font-medium" dir="ltr">
            {dimension}
          </span>
        </div>
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          <svg
            className="fill-primary dark:fill-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m21.5,0h-8.5v7h11V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,6h-9V1h7.5c.827,0,1.5.673,1.5,1.5v3.5Zm-15-1H2.5c-1.379,0-2.5,1.122-2.5,2.5v16.5h24v-13H8v-6ZM1,7.5c0-.827.673-1.5,1.5-1.5h4.5v5H1v-3.5Zm0,10.5h6v5H1v-5Zm15,0v5h-8v-5h8Zm1,5v-5h6v5h-6Zm6-6h-10.5v-5h10.5v5Zm-11.5-5v5H1v-5h10.5Z" />
          </svg>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <span className="flex items-center gap-1 text-sm font-medium text-meta-5">
          قیمت {price}
        </span>
        {amount && (
          <span className="flex items-center gap-1 text-sm font-medium text-green-400">
            سهمیه {amount}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardDataStats;
