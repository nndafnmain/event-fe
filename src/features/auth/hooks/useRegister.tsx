import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { authServices } from "../services/authServices";

export const useRegister = () => {
  return useMutation({
    mutationFn: authServices.register,
    onSuccess: (data) => {
      console.log("Registration successful:", data);
      alert("Registration successful!");
    },
    onError: (error) => {
      console.error("Registration failed:", error.message);
      toast.error(error.message);
      // alert(`Registration failed: ${error.message}`);
    },
  });
};
