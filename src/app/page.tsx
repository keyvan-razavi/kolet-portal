import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
// import UserDashboard from "@/components/Dashboards/User-Dashboard";
import Login from "./auth/signin/page";


export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Login />
      </DefaultLayout>
    </>
  );
}
