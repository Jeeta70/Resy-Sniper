import axios from "axios"
import { toast } from "@/components/ui/use-toast"
import { baseUrl } from "@/config/baseUrl"
import { useMutation } from "@tanstack/react-query"
import { getToken } from "@/utils/healper"

interface IAccountDetails {
   email?: string,
   password?: string
   phone?: string,
}

export const useConnectResyAccount = () => {
   const { mutate: connectResyAccount, isPending: isLoading } = useMutation({
      mutationFn: ({ email, password }: IAccountDetails) => {
         return axios.post(`${baseUrl}/api/resylogin`, { email, password },{headers:{Authorization:`Bearer ${getToken("access_token")}`}})
      },
      onSuccess: () => {
         toast({ description: "sucessfully connected", variant: "dark" })
      },
      onError: () => toast({ description: "some issue in connecting account", variant: "destructive" })
   })

   return { connectResyAccount, isLoading }
}