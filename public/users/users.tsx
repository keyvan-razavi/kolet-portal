export type User = {
  id: number;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  products: {
    id: number;
    title: string;
    dimension: string;
    price: number;
    availableAmount: number;
  }[];
};

export const users: User[] = [
  {
    id: 1,
    name: "keyvan",
    phone: "09182881080",
    email: "test@test.tst",
    address: "tehran, vozara",
    products: [
      {
        id: 1,
        title: "آجر سفال",
        dimension: "25*20*9",
        price: 25800,
        availableAmount: 50000,
      },
      {
        id: 2,
        title: "آجر سفال",
        dimension: "25*20*15",
        price: 22750,
        availableAmount: 40000,
      },
      {
        id: 3,
        title: "آجر سفال",
        dimension: "20*20*15",
        price: 24300,
        availableAmount: 45000,
      },
      {
        id: 4,
        title: "آجر سفال",
        dimension: "20*20*9",
        price: 18950,
        availableAmount: 35000,
      },      {
        id: 5,
        title: "آجر سفال",
        dimension: "20*20*15",
        price: 98650,
        availableAmount: 123000,
      },      {
        id: 6,
        title: "آجر سفال",
        dimension: "20*25*9",
        price: 85550,
        availableAmount: 54000,
      },
    ],
  },
  {
    id: 2,
    name: "hosein",
    phone: "09360061403",
    email: "test@test.tst",
    address: "tehran, vozara",
    products: [
      {
        id: 1,
        title: "آجر سفال",
        dimension: "25*20*9",
        price: 25800,
        availableAmount: 50000,
      },
      {
        id: 2,
        title: "آجر سفال",
        dimension: "25*20*15",
        price: 22750,
        availableAmount: 40000,
      },
      {
        id: 3,
        title: "آجر سفال",
        dimension: "20*20*15",
        price: 24300,
        availableAmount: 45000,
      },
    ],
  },
];
