import { currentUser } from "@/lib/current-user";
import { type LayoutProps } from "@/types/layout-props";
import { redirect } from "next/navigation";
import { Sidebar } from "./_components/sidebar";

const MainLayout = async ({ children }: LayoutProps) => {
  const userData = await currentUser();
  if (!userData) {
    return redirect("/");
  }

  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="flex h-full w-full flex-1 items-center justify-center overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
