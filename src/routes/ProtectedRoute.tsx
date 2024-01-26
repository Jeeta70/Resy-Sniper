
import { toast } from "@/components/ui/use-toast";
import { useGetUser } from "@/features/user/user";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
   const { userResponse, isLoading, isSuccess, isError } = useGetUser();
   const navigate = useNavigate();
   useEffect(() => {
      if (!isLoading && isSuccess) {
         const userDetail = userResponse?.data.data;
         const { email, resy_token, subscription_type } = userDetail;
         if (!email) {
            navigate("/login");
         }

         if (!resy_token) {
            toast({
               description: "You need to connect the account",
               variant: "dark",
            });
            navigate("/connect-account");
         } else if (subscription_type === "none") {
            toast({
               description: "You need to take the subscription",
               variant: "dark",
            });
            navigate("/subscription");
         }
      }
   }, [isError, isLoading, isSuccess, navigate, userResponse]);


   return (
      <>
         <Outlet />
      </>
   );
};

export default ProtectedRoute;
