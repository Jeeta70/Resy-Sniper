import axios, { AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
   const navigate = useNavigate()
   const { mutate: signup, isPending: isLoading } = useMutation({
      mutationFn: ({ firstName, lastName, email, countryCode, phoneNumber, password }: IUser) => {
         return axios.post(`${baseUrl}/api/register`, { first_name: firstName, last_name: lastName, email, phone: `${countryCode}${phoneNumber}`, password, });
      },
      onSuccess: (user) => {
         const { data } = user
         localStorage.setItem('token', JSON.stringify(data.data))
         toast({ description: data.message, variant: "dark" })
         navigate("/connect-accounts")
      },
      onError: (err: { response: AxiosResponse }) => toast({ description: err.response.data.message, variant: "destructive" }),
   });
   return { signup, isLoading };
};



export const useLogin = () => {
   const queryClient = useQueryClient()
   const { mutate: login, isPending: isLoading } = useMutation({
      mutationFn: ({ email, password, }: IUser) => {
         return axios.post(`${baseUrl}/api/login`, { email, password });
      },
      onSuccess: (user) => {
         const { data } = user
         localStorage.setItem('token', JSON.stringify(data.data))
         toast({ description: data.message, variant: "dark" })
      },
      onError: (err: { response: AxiosResponse }) => {
         toast({ description: err.response.data.message, variant: "destructive" })
         queryClient.invalidateQueries({ queryKey: ["user"] })
         console.log("ss");

      },
   });
   return { login, isLoading };
};


export function useCheckUserIsLogin() {
   const refreshToken = getToken("refresh_token");
   const { data, isPending: isLoading, isSuccess, isError } = useQuery({
      queryKey: ["checkAuth"],
      retry: false,
      queryFn: () => {
         return axios.get(`${baseUrl}/api/refresh`, { headers: { "Authorization": `Bearer ${refreshToken}` } });
      },

   })
   return { data, isLoading, isSuccess, isError };
}



export const useResetPassword = () => {
   const { mutate: resetPassword, isPending: isLoading } = useMutation({
      mutationFn: ({ email }: { email: string }) => {
         return axios.post(`${baseUrl}/api/request_password_reset`, { email });
      },
      onSuccess: () => toast({ description: "Link is send to your email", variant: "dark" }),
      onError: (err: { response: AxiosResponse }) => {
         toast({ description: err.response.data.message, variant: "destructive" })
      },
   });
   return { resetPassword, isLoading };
};



export const useVerifyResetPassword = () => {
  const navigate =  useNavigate()
   const { mutate: verifyResetPassword, isPending: isLoading } = useMutation({
      mutationFn: ({ password, token }: { password: string, token: string | null }) => {
         return axios.post(`${baseUrl}/api/verify_reset_password/${token}`, { password });
      },
      onSuccess: () => {
         toast({ description: "Password reset successfully", variant: "dark" })
         navigate("/login")
      },
      onError: (err: { response: AxiosResponse }) => {
         toast({ description: err.response.data.message, variant: "destructive" })
      },
   });
   return { verifyResetPassword, isLoading };
};



export const useChangePassword = () => {
   const accessToken = getToken("access_token")
   const navigate = useNavigate()
   const { mutate: changePassword, isPending: isLoading } = useMutation({
      mutationFn: ({ password}: { password: string}) => {
         return axios.post(`${baseUrl}/api/change_password`, { password }, { headers: { "Authorization": `Bearer ${accessToken}` }});
      },
      onSuccess: () => {
         toast({ description: "Password change successfully", variant: "dark" })
         navigate("/profile")
      },
      onError: (err: { response: AxiosResponse }) => {
         toast({ description: err.response.data.message, variant: "destructive" })
      },
   });
   return { changePassword, isLoading };
};



