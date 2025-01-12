/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/utils/formZodSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { ButtonLoader, ForgotPasswordModal } from "@/components";
import { useLogin } from "@/features/authentication/auth";
import { useToast } from "@/components/ui/use-toast";
import { useGetUser } from "@/features/user/user";
import { getToken } from "@/utils/healper";

const Index = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useLogin()
  const { toast } = useToast()
  const { userResponse, isLoading:getUserIsLoading, isSuccess, isError } = useGetUser();



  useEffect(() => {

    if (!getUserIsLoading && isSuccess) {
      const userDetail = userResponse?.data.data;

      const { resy_token, subscription_type } = userDetail;
      if (getToken("access_token") === null) {
        navigate("/login");
      } else if (!resy_token) {
        toast({
          description: "You need to connect an account",
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
        toast({ description: localStorage.getItem("token") ? "You are already logged in " : "Successfully logged in", variant: "destructive", });
        navigate("/reservations");
      }
    }
  }, [isError, getUserIsLoading, isSuccess, navigate, userResponse, toast]);





  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "", password: "", },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    login(values, {
      onSuccess: () => {
        form.reset();

      }
    })
  }

  return (
    <>
      <div className="h-full w-full sm:w-6/12 px-8 flex flex-col sm:justify-center">
        <div className="text-center mt-5 text-[#F94633] hover:text-primary text-4xl font-bold">
          <Link to={'/home'}> RESERVATION SNIPER </Link>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 sm:m-auto my-2 w-full"
          >
            <h2 className="text-center font-bold text-2xl" onClick={() => {
              toast({
                description: "Your message has been sent.",
                variant: "dark"
              })
            }}>Login</h2>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className=" font-normal text-sm">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage className="absolute -bottom-5 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className=" font-normal text-sm ">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Your password" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage className="absolute -bottom-5 text-xs" />
                </FormItem>
              )}
            />

            <ForgotPasswordModal />

            <Button variant="primary" type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <ButtonLoader /> : "Login"}
            </Button>
            <div className="text-center font-normal">
              Don't have an account?{" "}
              <Button
                className="text-blue font-medium"
                variant="link"
                // type="b"
                onClick={() => navigate("/sign-up")}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default React.memo(Index);
