import { getToken } from "@/utils/healper";
import axios, { AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { baseUrl } from "@/config/baseUrl";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

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
   const navigate = useNavigate()
   const accesToken = getToken("access_token");
   const { mutate: Cancel, isPending: isLoading } = useMutation({
      mutationFn: () => {
         return axios.post(`${baseUrl}/api/cancel-subscription`, {}, {
            headers: { Authorization: `Bearer ${accesToken}` },
         });
      },
      onSuccess: (user) => {
         const { data } = user;
         toast({ description: data.message, variant: "dark" });
         navigate("/subscription")
      },
      onError: (err: { response: AxiosResponse }) => {
         toast({ description: err.response.data.message, variant: "destructive" });
      },
   });
   return { Cancel, isLoading };
};


export function useCheckSubscriptionIsCompleted() {
   const accesToken = getToken("access_token");

   const { data: customData, isPending: isLoading, isSuccess: customIsSuccess, isError, error } = useQuery({
      queryKey: ["subs", accesToken],
      retry: false,
      queryFn: (): Promise<AxiosResponse> => {
         return axios.get(`${baseUrl}/api/subscription-details`, { headers: { "Authorization": `Bearer ${accesToken}` } });
      },
   })
   return { customData, isLoading, customIsSuccess, isError, error };
}

export function useUpgradeSubscription() {

   const queryClient = useQueryClient()
   const accesToken = getToken("access_token");
   const { mutate: upgrade, isPending: isLoading } = useMutation({
      mutationFn: (subscription: "premium" | "standard") => {
         return axios.post(`${baseUrl}/api/change-subscription`, { "new_subscription_tier": subscription }, {
            headers: { Authorization: `Bearer ${accesToken}` },
         });
      },
      onSuccess: () => {
         document.getElementById("closeProModel")?.click()
         queryClient.invalidateQueries({ queryKey: ["user"] })
      },

   });
   return { upgrade, isLoading, };
}



