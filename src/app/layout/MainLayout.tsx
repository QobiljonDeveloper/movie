import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { memo } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow dark:bg-sy">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default memo(MainLayout);
