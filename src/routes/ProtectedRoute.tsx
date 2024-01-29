import { toast } from "@/components/ui/use-toast";
import { useGetUser } from "@/features/user/user";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { userResponse, isLoading, isSuccess, isError, error } = useGetUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (isError && error) {
      const errorWithResponse = error as { response?: { data?: { msg?: string } } };
      if (errorWithResponse.response && errorWithResponse.response.data && errorWithResponse.response.data.msg === "Not enough segments") {
        toast({
          description: "Your token has expired",
          variant: "destructive",
        });
        navigate("/login");
      }
    }
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
        navigate("/connect-accounts");
      } else if (subscription_type === "none") {
        toast({
          description: "You must subscribe to proceed",
          variant: "dark",
        });
        navigate("/subscription");
      }
    }
  }, [error, isError, isLoading, isSuccess, navigate, userResponse]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
