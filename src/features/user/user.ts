import { baseUrl } from "@/config/baseUrl";
import { getToken } from "@/utils/healper";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export function useGetUser() {
   const accesToken = getToken("access_token")
   const { data: userResponse, isPending: isLoading, isSuccess, isError, error } = useQuery ({
      queryKey: ['user', accesToken],
      retry: false,
      queryFn: (): Promise<AxiosResponse> => {
         return axios.get(`${baseUrl}/api/current_user`, { headers: { "Authorization": `Bearer ${accesToken}` } });
      },
   })


   return { userResponse, isLoading, isSuccess, isError, error };
}


export function useCheckUserAccountIsConnected(){
   const accesToken = getToken("access_token");
   console.log("accesToken query", accesToken)
   const { data: userResponse, isPending: isLoading, isSuccess, isError, error } = useQuery({
      queryKey: ["accesToken"],
      retry: false,
      queryFn: (): Promise<AxiosResponse> => {
         return axios.get(`${baseUrl}/api/check_resy_auth`, { headers: { "Authorization": `Bearer ${accesToken}` } });
      },
   })

   console.log("userResponse query", userResponse);
   return { userResponse, isLoading, isSuccess, isError, error };
}