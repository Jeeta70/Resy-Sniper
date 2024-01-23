import { getToken } from "@/utils/healper";
import axios, { AxiosResponse } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { baseUrl } from "@/config/baseUrl";
import { toast } from "@/components/ui/use-toast";

export const useCreateSubscribtion = () => {
   const accesToken = getToken("access_token");
   const { mutate: createSubsciption, isPending: isLoading } = useMutation({
      mutationFn: (subscriptionType: string) => {
         return axios.post(`${baseUrl}/api/create-checkout-session`, { subscription_tier: subscriptionType, }, { headers: { Authorization: `Bearer ${accesToken}` } });
      },
      onSuccess: (user) => {
         const { data } = user;
         window.location.replace(data.sessionUrl);
         toast({ description: data.message, variant: "dark" });
      },
      onError: (err: { response: AxiosResponse }) => {
         toast({ description: err.response.data.message, variant: "destructive" });
      },
   });
   return { createSubsciption, isLoading };
};

export const CancelSubscription = () => {
   const accesToken = getToken("access_token");
   const { mutate: Cancel, isPending: isLoading } = useMutation({
      mutationFn: () => {
         return axios.post(`${baseUrl}/api/cancel-subscription`, {
            headers: { Authorization: `Bearer ${accesToken}` },
         });
      },
      onSuccess: (user) => {
         const { data } = user;
         toast({ description: data.message, variant: "dark" });
      },
      onError: (err: { response: AxiosResponse }) => {
         toast({ description: err.response.data.message, variant: "destructive" });
      },
   });
   return { Cancel, isLoading };
};


export function useCheckSubscriptionIsCompleted(){
   const accesToken = getToken("access_token");
   const { data: response, isPending: isLoading, isSuccess, isError, error } = useQuery({
      queryKey: ["accesToken"],
      retry: false,
      queryFn: (): Promise<AxiosResponse> => {
         return axios.get(`${baseUrl}/api/subscription-details`, { headers: { "Authorization": `Bearer ${accesToken}` } });
      },
   })
   return { response, isLoading, isSuccess, isError, error };
}





