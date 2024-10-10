import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
// import UserDashboard from "@/components/Dashboards/User-Dashboard";
import Login from "./auth/signin/page";

export const metadata: Metadata = {
  title: "Kolet: SignIn",
  description: "Signin Page - Kole Portal",
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
