import { useGetUser } from "@/features/user/user";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { getToken } from "@/utils/healper";

const PresistLoginSignUp = () => {
   const { userResponse, isLoading, isSuccess, isError } = useGetUser();
   const navigate = useNavigate();
   

   useEffect(() => {

      if (!isLoading && isSuccess) {
         const userDetail = userResponse?.data.data;
         const { resy_token, subscription_type } = userDetail;
         if (getToken("access_token") === null) {
            navigate("/login");
         } else if (!resy_token) {
            toast({
               description: "You need to connect the account",
               variant: "dark",
            });
            navigate("/connect-accounts");
         } else if (subscription_type === "none") {
            toast({
               description: "You must subscribe to proceed",
               variant: "dark",
            });
            navigate("/subscription");
         } else {
            toast({ description: localStorage.getItem("token") ? "You are already login " : "Successfull login", variant: "destructive", });
            navigate("/reservations");
         }
      }
   }, [isError, isLoading, isSuccess, navigate, userResponse]);

   return (
      <>
         <Outlet />
      </>
   );
};

export default PresistLoginSignUp;
