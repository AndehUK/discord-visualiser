import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

import { type LayoutProps } from "@/types/layout-props";

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="relative h-full">
      <div className="hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
