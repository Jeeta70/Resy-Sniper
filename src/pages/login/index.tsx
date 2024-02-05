import { LoginForm } from "@/components";

const Login = () => {

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
