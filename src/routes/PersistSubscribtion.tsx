import { toast } from '@/components/ui/use-toast';
import {  useGetUser } from '@/features/user/user';
import { getToken } from '@/utils/healper';
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const PersistSubscribtion = () => {
   // const { userResponse, isSuccess,isError } = useCheckUserAccountIsConnected()
   const { userResponse, isLoading } = useGetUser()
   const navigate = useNavigate();

   // useEffect(() => {
   //    if (isError) {
   //       return navigate("/login")
   //    }
   //    if (isSuccess) {
   //       const data = userResponse?.data;
   //       const { resy_signed_in } = data
   //       if (!resy_signed_in) {
   //          return navigate("/connect-accounts")
   //       }
   //    }

   // }, [isError, isSuccess, navigate, userResponse]);

   useEffect(() => {
      if (!isLoading && userResponse) {
         const userData = userResponse.data.data
         if (!getToken("access_token")) {
            toast({ description: "You need to Login first first !", variant: "dark" })
         } else if (!userData.resy_token) {
            toast({ description: "You need to connect the account first !", variant: "dark" })
         } else if (userData.subscription_type === "premium" || userData.subscription_type === "standard") {
            toast({ description: "You have already taken the subscription !", variant: "dark" })
            return navigate("/reservations")
         }

      }

   }, [isLoading, navigate, userResponse]);



   return <Outlet />;
}

export default PersistSubscribtion