import * as z from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginFormSchema } from "@/utils/formZodSchema";
import { ForgotPasswordModal } from "@/components";

const Index = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="h-full w-full sm:w-6/12 px-8 flex flex-col justify-center">
        <div className="text-center mt-5 text-[#F94633] text-5xl font-bold">
          RESY SNIPER
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 m-auto w-full"
          >
            <h2 className="text-center font-bold text-2xl">Login</h2>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel className=" font-normal text-sm">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel className=" font-normal text-sm ">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Your password" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />

            <ForgotPasswordModal />

            <Button variant="primary" type="submit" className="w-full">
              Log in
            </Button>
            <div className="text-center font-normal">
              Don't have an account?{" "}
              <Button
                className="text-blue font-medium"
               variant="link"
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

export default Index;
