import { LoginForm } from "@/components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      navigate("/reservations")
    }

  }, [])
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center place-items-start h-dvh">
        <LoginForm />
        <div className={`h-full w-full bg-[url(@/assets/login/login.png)] hidden sm:block object-contain`}></div>
      </div>
    </>
  );
};

export default Login;
