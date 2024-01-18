import { LoginForm } from "@/components";

const Login = () => {
  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2 place-items-center h-dvh">
        <LoginForm />
        <div className="h-full w-full bg-[url('login/login.png')] hidden sm:block object-contain"></div>
      </div>
    </>
  );
};

export default Login;
