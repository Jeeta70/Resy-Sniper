import { getToken } from "@/utils/healper";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "@/config/baseUrl";
import { toast } from "@/components/ui/use-toast";



export const CancelSubscription = () => {
    const accesToken = getToken("access_token")
    const { mutate: Cancel, isPending: isloading } = useMutation({
        mutationFn: () => {
           return axios.post(`${baseUrl}/api/cancel-subscription`, { headers: { "Authorization": `Bearer ${accesToken}` } });
        },
        onSuccess: (user) => {
           const { data } = user
           toast({ description: data.message, variant: "dark" })
        },
        onError: (err: { response: AxiosResponse }) => {
           toast({ description: err.response.data.message, variant: "destructive" })
        },
     });
     return { Cancel, isloading };
 };