import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { Outlet } from "react-router-dom";

export const Auth = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};
