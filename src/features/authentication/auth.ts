import axios, { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "@/config/baseUrl";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

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
   const { mutate: signup, isPending: isloading } = useMutation({
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
   return { signup, isloading };
};



export const useLogin = () => {
   const { mutate: login, isPending: isloading } = useMutation({
      mutationFn: ({ email, password, }: IUser) => {
         return axios.post(`${baseUrl}/api/login`, { email, password });
      },
      onSuccess: (user) => {
         const { data } = user
         localStorage.setItem('token', JSON.stringify(data.data))
         toast({ description: data.message, variant: "dark" })
      },
      onError: (err: { response: AxiosResponse }) => toast({ description: err.response.data.message, variant: "destructive" }),
   });
   return { login, isloading };
};
