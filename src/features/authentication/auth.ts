import axios, { AxiosResponse } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { baseUrl } from "@/config/baseUrl";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { getToken } from "@/utils/healper";

interface IUser {
   firstName?: string;
   lastName?: string;
   email: string;
   countryCode?: string;
   phoneNumber?: string;
   password: string;
}

export const useSignup = () => {
   const navigate = useNavigate();
   const { mutate: signup, isPending: isLoading } = useMutation({
      mutationFn: ({
         firstName,
         lastName,
         email,
         countryCode,
         phoneNumber,
         password,
      }: IUser) => {
         return axios.post(`${baseUrl}/api/register`, {
            first_name: firstName,
            last_name: lastName,
            email,
            phone: `${countryCode}${phoneNumber}`,
            password,
         });
      },
      onSuccess: (user) => {
         const { data } = user;
         localStorage.setItem("token", JSON.stringify(data.data));
         toast({ description: data.message, variant: "dark" });
         navigate("/connect-accounts");
      },
      onError: (err: { response: AxiosResponse }) =>
         toast({ description: err.response.data.message, variant: "destructive" }),
   });
   return { signup, isLoading };
};

export const useLogin = () => {
   const navigate = useNavigate();
   const { mutate: login, isPending: isLoading } = useMutation({
      mutationFn: ({ email, password }: IUser) => {
         return axios.post(`${baseUrl}/api/login`, { email, password });
      },
      onSuccess: ({ data: { data, message } }) => {
         localStorage.setItem("token", JSON.stringify({ access_token: data.access_token, refresh_token: data.refresh_token, }))
         const { resy_token, subscription_type } = data;
         if (!resy_token) {
            toast({
               description: "You need to connect the account",
               variant: "dark",
            });
            navigate("/connect-accounts");
         } else if (subscription_type === "none") {
            toast({
               description: "You must subscribe to proceed",
               variant: "dark",
            });
            navigate("/subscription");
         } else {
            toast({ description: localStorage.getItem("token") ? "You are already login " : "Successfull login", variant: "destructive", });
            navigate("/reservations");
         }

         toast({ description: message, variant: "dark" });
      },
      onError: (err: { response: AxiosResponse }) => {
         toast({ description: err.response.data.message, variant: "destructive" });
      },
   });
   return { login, isLoading };
};

export function useCheckUserIsLogin() {
   const refreshToken = getToken("refresh_token");
   const {
      data,
      isPending: isLoading,
      isSuccess,
      isError,
   } = useQuery({
      queryKey: ["checkAuth"],
      retry: false,
      queryFn: () => {
         return axios.get(`${baseUrl}/api/refresh`, {
            headers: { Authorization: `Bearer ${refreshToken}` },
         });
      },
   });
   return { data, isLoading, isSuccess, isError };
}

export const useResetPassword = () => {
   const { mutate: resetPassword, isPending: isLoading } = useMutation({
      mutationFn: ({ email }: { email: string }) => {
         return axios.post(`${baseUrl}/api/request_password_reset`, { email });
      },
      onSuccess: () =>
         toast({ description: "Link is send to your email", variant: "dark" }),
      onError: (err: { response: AxiosResponse }) => {
         toast({ description: err.response.data.message, variant: "destructive" });
      },
   });
   return { resetPassword, isLoading };
};

export const useVerifyResetPassword = () => {
   const navigate = useNavigate();
   const { mutate: verifyResetPassword, isPending: isLoading } = useMutation({
      mutationFn: ({
         password,
         token,
      }: {
         password: string;
         token: string | null;
      }) => {
         return axios.post(`${baseUrl}/api/verify_reset_password/${token}`, {
            password,
         });
      },
      onSuccess: () => {
         toast({ description: "Password reset successfully", variant: "dark" });
         navigate("/login");
      },
      onError: (err: { response: AxiosResponse }) => {
         toast({ description: err.response.data.message, variant: "destructive" });
      },
   });
   return { verifyResetPassword, isLoading };
};

export const useChangePassword = () => {
   const accessToken = getToken("access_token");
   const navigate = useNavigate();
   const { mutate: changePassword, isPending: isLoading } = useMutation({
      mutationFn: ({ password }: { password: string }) => {
         return axios.post(
            `${baseUrl}/api/change_password`,
            { password },
            { headers: { Authorization: `Bearer ${accessToken}` } }
         );
      },
      onSuccess: () => {
         toast({ description: "Password change successfully", variant: "dark" });
         navigate("/profile");
      },
      onError: (err: { response: AxiosResponse }) => {
         toast({ description: err.response.data.message, variant: "destructive" });
      },
   });
   return { changePassword, isLoading };
};
