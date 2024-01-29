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
   const { data: userResponse, isPending: isLoading, isSuccess, isError, error } = useQuery ({
      queryKey: ["user"],
      staleTime:0,
      queryFn: (): Promise<AxiosResponse> => {
         return axios.get(`${baseUrl}/api/current_user`, { headers: { "Authorization": `Bearer ${accesToken}` } });
      },
   })
   return { userResponse, isLoading, isSuccess, isError, error };
}


export function useCheckUserAccountIsConnected(){
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


export function useUpdateProfile () {
   const navigate = useNavigate()
   const accesToken = getToken("access_token");
   const { mutate: update, isPending: isLoading } = useMutation({
      mutationFn: ({ firstName, lastName, email, countryCode, phoneNumber }: IUser) => {
         return axios.patch(`${baseUrl}/api/update_user`, { first_name: firstName, last_name: lastName, email, phone: `${countryCode}${phoneNumber}`, },{ headers: { "Authorization": `Bearer ${accesToken}` } });
      },
      onSuccess: (user) => {
         const { data } = user
         localStorage.setItem('token', JSON.stringify(data.data))
         toast({ description: data.message, variant: "dark" })
         navigate("/login")
      },
      onError: (err: { response: AxiosResponse }) => toast({ description: err.response.data.message, variant: "destructive" }),
   });
   return { update, isLoading };
}