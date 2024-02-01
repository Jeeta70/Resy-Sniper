import { toast } from "@/components/ui/use-toast";
import { useCheckUserIsLogin } from "@/features/authentication/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PresistConnectAccount = () => {
  const { data, isSuccess, isError } = useCheckUserIsLogin();
  const navigate = useNavigate();
  

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", JSON.stringify(data?.data.data));
    }
    if (isError) {
      toast({
        description: "You need to Login First !",
        variant: "destructive",
      });
      navigate("/login", { replace: true });
    }
  }, [data, isError, isSuccess, navigate]);

  return <Outlet />;
};

export default PresistConnectAccount;
