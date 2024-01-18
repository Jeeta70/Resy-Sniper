/* eslint-disable react-refresh/only-export-components */
import React from "react";
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

const Index = () => {
  const navigate = useNavigate();
  const { login, isloading } = useLogin()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "", password: "", },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    login(values, {
      onSuccess: () => {
        form.reset()
        navigate("/connect-accounts")
      }
    })
  }

  return (
    <>
      <div className="h-full w-full sm:w-6/12 px-8 flex flex-col justify-center">
        <div className="text-center mt-5 text-primary text-5xl font-bold">
          RESY SNIPER
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 m-auto w-full"
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
                    <Input placeholder="Your password" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage className="absolute -bottom-5 text-xs" />
                </FormItem>
              )}
            />

            <ForgotPasswordModal />

            <Button variant="primary" type="submit" className="w-full" disabled={isloading}>
              {isloading ? <ButtonLoader /> : "Login"}
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
