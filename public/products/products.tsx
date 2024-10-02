export type Product = {
  id: number;
  title: string;
  imageSrc?: any;
  dimension: string;
  price: number;
  children?: any;
};

export const products: Product[] = [
  {
    id: 1,
    title: "آجر سفال",
    dimension: "25*20*9",
    price: 25800,
    children: (
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
    ),
  },
  {
    id: 2,
    title: "آجر سفال",
    dimension: "25*20*15",
    price: 22750,
    children: (
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
    ),
  },
  {
    id: 3,
    title: "آجر سفال",
    dimension: "20*20*15",
    price: 24300,
    children: (
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
    ),
  },
  {
    id: 4,
    title: "آجر سفال",
    dimension: "20*20*9",
    price: 18950,
    children: (
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
    ),
  },
];
