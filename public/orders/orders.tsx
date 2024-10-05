export type Order = {
  id: number;
  title: string;
  userId: number;
  status: string;
  totalCost: number;
  submitDate: any;
  items: any[];
};

export const orders: Order[] = [
  {
    id: 1,
    title: "آجر سفال",
    userId: 1,
    status: "در انتظار تایید",
    totalCost: 3500000,
    submitDate: "1403/07/08",
    items: [{ productName: ["آجرسفال 25*20*9 ", "آجرسفال 25*20*15"] }],
  },
  {
    id: 2,
    title: "آجر سفال",
    userId: 1,
    status: "نهایی شده",
    totalCost: 7800000,
    submitDate: "1403/07/12",
    items: [{ productName: ["آجرسفال 25*20*15", "آجرسفال 20*20*9"] }],
  },
  {
    id: 3,
    title: "آجر سفال",
    userId: 1,
    status: "عدم تایید",
    totalCost: 12000000,
    submitDate: "1403/07/04",
    items: [{ productName: ["آجرسفال 20*20*9", "آجرسفال 25*20*9"] }],
  },
];
