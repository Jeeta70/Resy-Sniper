
import { toast } from "@/components/ui/use-toast";
import { useGetUser } from "@/features/user/user";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
   const { userResponse, isLoading, isError } = useGetUser();
   const navigate = useNavigate();

   useEffect(() => {
      if (!isLoading && userResponse) {
         const { data: { data }, } = userResponse;
         console.log("data=>", data);

      }
      if (isError) {

         toast({
            description: "You need to Create the account First!",
            variant: "destructive",
         });
         navigate("/login");
      }
   }, [userResponse, isLoading, isError, navigate]);


   return (
      <>
         <Outlet />
      </>
   );
};

export default ProtectedRoute;
