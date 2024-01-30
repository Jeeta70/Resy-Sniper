import axios, { AxiosResponse } from "axios";
import { toast } from "@/components/ui/use-toast";
import { baseUrl } from "@/config/baseUrl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getToken } from "@/utils/healper";

interface IAccountDetails {
   email?: string;
   password?: string;
   phone?: string;
}

export const useConnectResyAccount = () => {
   const { mutate: connectResyAccount, isPending: isLoading } = useMutation({
      mutationFn: ({ email, password }: IAccountDetails) => {
         return axios.post(
            `${baseUrl}/api/resylogin`,
            { email, password },
            { headers: { Authorization: `Bearer ${getToken("access_token")}` } }
         );
      },
      onSuccess: () => {
         toast({ description: "sucessfully connected", variant: "dark" });
      },
      onError: (error: { response: AxiosResponse }) => {
         toast({
            description: error.response.data.message,
            variant: "destructive",
         });
      },
   });

   return { connectResyAccount, isLoading };
};

export const useDisconnectConnectResyAccount = () => {
   const queryClient = useQueryClient();
   const { mutate: discconetResyAccount, isPending: isLoading } = useMutation({
      mutationFn: (): any => {
         return axios.post(
            `${baseUrl}/api/resysignout`,
            {},
            { headers: { Authorization: `Bearer ${getToken("access_token")}` } }
         );
      },
      onSuccess: () => {
         toast({ description: "sucessfully connected", variant: "dark" });
         queryClient.invalidateQueries({ queryKey: ["user"] });
         // document.getElementById("dissconnetResyConnect")?.click()
      },
      onError: (error: { response: AxiosResponse }) => {
         toast({
            description: error.response.data.message,
            variant: "destructive",
         });
      },
   });

   return { discconetResyAccount, isLoading };
};

export const useConnectOpenTableAccount = () => {
   const access_token = getToken("access_token");
   const { mutate: connectOpenTableAccount, isPending: isLoading } = useMutation(
      {
         mutationFn: ({ countryCode, phoneNumber }: { countryCode: string, phoneNumber: string }) => {
            return axios.post(
               `${baseUrl}/api/opentable-phone-login`,
               {
                  phone: phoneNumber,
                  country_code: countryCode,
                  country_identifier: "in",
               },
               { headers: { Authorization: `Bearer ${access_token}` } }
            );
         },
         onSuccess: () => {
            toast({ description: "sucessfully connected", variant: "dark" });
         },
         onError: (error: { response: AxiosResponse }) => {
            toast({
               description: error.response.data.message,
               variant: "destructive",
            });
         },
      }
   );

   return { connectOpenTableAccount, isLoading };



};


export const useOpenTableCode = () => {
   const access_token = getToken("access_token");
   const { mutate: openTableCode, isPending: isLoading } = useMutation(
      {
         mutationFn: ({ code }: { code: string }) => {
            return axios.post(
               `${baseUrl}/api/verify-phone-2fa`, { "code": code },
               { headers: { Authorization: `Bearer ${access_token}` } }
            );
         },
         onSuccess: () => {
            toast({ description: "sucessfully connected", variant: "dark" });
         },
         onError: (error: { response: AxiosResponse }) => {
            toast({
               description: error.response.data.message,
               variant: "destructive",
            });
         },
      }
   );

   return { openTableCode, isLoading };
};