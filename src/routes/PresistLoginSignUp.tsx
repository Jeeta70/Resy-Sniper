import { useGetUser } from "@/features/user/user";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
// import { getToken } from "@/utils/healper";

const PresistLoginSignUp = () => {
   const navigate = useNavigate();
   const { userResponse, isLoading, isSuccess, isError,error } = useGetUser();
   
   useEffect(() => {

      if (isError || error) {
         const errorWithResponse = error as { response?: { data?: { msg?: string } } };
         if (errorWithResponse.response && errorWithResponse.response.data && errorWithResponse.response.data.msg === "Not enough segments") {
            navigate("/login");
         }
      }
      if (!isLoading && isSuccess) {
         const userDetail = userResponse?.data.data;
         const { email, resy_token, subscription_type, ot_access_token } = userDetail;
         if (!email) {
            navigate("/login");
         }

         if (!resy_token && !ot_access_token) {
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
         }else {
            navigate("/reservations");
         }
      }
   }, [error, isError, isLoading, isSuccess, navigate, userResponse]);
   return (
      <>
         <Outlet />
      </>
   );
};

export default PresistLoginSignUp;
