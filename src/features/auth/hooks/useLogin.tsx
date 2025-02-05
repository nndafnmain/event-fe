import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authServices } from "../services/authServices";
import { toast } from "sonner";
import { useAuthStore } from "../stores/authStore";

export const useLogin = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: authServices.login,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      setAuth(data.access_token);
      toast.success("Login success! redirecting to home...");
      setTimeout(() => navigate("/"), 1500);
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
      // alert(`Login failed: ${error.message}`);
      toast.error("Invalid credentials!");
    },
  });
};
