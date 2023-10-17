import { type LayoutProps } from "@/types/layout-props";

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-full items-center justify-center">{children}</div>
  );
};

export default AuthLayout;
