import { baseUrl } from "@/config/baseUrl";
import { getToken } from "@/utils/healper";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

type IUser = {
   firstName: string
   lastName: string
   email: string
   countryCode: string
   phoneNumber: string
}

export function useGetUser() {
   const accesToken = getToken("access_token")
   const { data: userResponse, isPending: isLoading, isSuccess, isError, error } = useQuery({
      queryKey: ["user", accesToken],
      retry: false,
      queryFn: (): Promise<AxiosResponse> => {
         return axios.get(`${baseUrl}/api/current_user`, { headers: { "Authorization": `Bearer ${accesToken}` } });
      },
   })

   return { userResponse, isLoading, isSuccess, isError, error };
}


export function useCheckUserAccountIsConnected() {
   const accesToken = getToken("access_token");
   const { data: userResponse, isPending: isLoading, isSuccess, isError, error } = useQuery({
      queryKey: ['resy'],
      retry: false,
      queryFn: (): Promise<AxiosResponse> => {
         return axios.get(`${baseUrl}/api/check_resy_auth`, { headers: { "Authorization": `Bearer ${accesToken}` } });
      },

   })
   return { userResponse, isLoading, isSuccess, isError, error };
}


export function useUpdateProfile() {
   const navigate = useNavigate()
   const accesToken = getToken("access_token");
   const { mutate: update, isPending: isLoading } = useMutation({
      mutationFn: ({ firstName, lastName, email, countryCode, phoneNumber }: IUser) => {
         return axios.patch(`${baseUrl}/api/update_user`, { first_name: firstName, last_name: lastName, email, phone: `${countryCode}${phoneNumber}`, }, { headers: { "Authorization": `Bearer ${accesToken}` } });
      },
      onSuccess: (user) => {
         const { data } = user
         toast({ description: data.message, variant: "dark" })
         localStorage.removeItem("token")
         navigate("/login")
      },
      onError: (err: { response: AxiosResponse }) => toast({ description: err.response.data.message, variant: "destructive" }),
   });
   return { update, isLoading };
}


export function useUpdateEmailNotification() {
   const accesToken = getToken("access_token");
   const { mutate: updateEmailNotification, isPending: isLoading, isSuccess } = useMutation({
      mutationFn: (e: boolean) => {
         return axios.post(
            `${baseUrl}/api/update_email_notifications`,
            { "email_notifications": e ? "1" : "0" },
            { headers: { Authorization: `Bearer ${accesToken}` }, }
         );
      },
   });
   return { updateEmailNotification, isLoading, isSuccess };
}

export function useUpdatePhoneNotification() {
   const accesToken = getToken("access_token");
   const { mutate: updatePhoneNotification, isPending: isLoading, isSuccess } = useMutation({
      mutationFn: (e: boolean) => {
         return axios.post(
            `${baseUrl}/api/update_phone_notifications`,
            { "phone_notifications": e ? "1" : "0" },
            { headers: { Authorization: `Bearer ${accesToken}` }, }
         );
      },
   });
   return { updatePhoneNotification, isLoading, isSuccess };
}

export function useGetEmailNotification() {
   const accesToken = getToken("access_token");
   const { data: getEmailNotification, isPending: isLoading } = useQuery({
      queryKey: ['Email Notification'],
      queryFn: (): Promise<AxiosResponse> => {
         return axios.get(`${baseUrl}/api/get_email_notifications`, { headers: { "Authorization": `Bearer ${accesToken}` } });
      },
   })
   return {  getEmailNotification, isLoading };
}

export function useGetPhoneNotification() {
   const accesToken = getToken("access_token");
   const { data: getPhoneNotification, isPending: isLoading } = useQuery({
      queryKey: ['Phone Notification'],
      queryFn: (): Promise<AxiosResponse> => {
         return axios.get(`${baseUrl}/api/get_phone_notifications`, { headers: { "Authorization": `Bearer ${accesToken}` } });
      },
   })
   return { getPhoneNotification, isLoading };
}
