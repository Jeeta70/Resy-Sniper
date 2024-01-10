import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Select, SelectContent, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { signupFormSchema } from "@/utils/formZodSchema";
import { CountryCode } from "@/components";
import { useSignup } from "@/features/authentication/auth";


const Index = () => {
  const navigate = useNavigate();
  const { signup, isloading } = useSignup()
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+91",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof signupFormSchema>) {
    signup(values, { onSuccess: () => form.reset() })
  }

  return (
    <>
      <div className="h-full w-full sm:w-6/12 px-8 flex flex-col justify-center">
        <div className="text-center text-[#F94633] text-5xl font-bold">
          RESY SNIPER
        </div>
        {/* <img src={logo} /> */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 m-auto w-full"
          >
            <h2 className="text-center font-bold text-2xl">Sign up</h2>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <>
                  <FormItem className="relative">
                    <FormLabel className="text-sm font-normal">First name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5 text-xs" />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <>
                  <FormItem className="relative">
                    <FormLabel className="text-sm font-normal">Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5 text-xs text-error" />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  <FormItem className="relative">
                    <FormLabel className="text-sm font-normal">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5 text-xs text-error" />
                  </FormItem>
                </>
              )}
            />
            <div className="flex items-end">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <>
                    <FormItem className="w-2/5 relative">
                      <FormControl>
                        <>
                          <FormLabel className="text-sm font-normal">Phone</FormLabel>
                          <Select value="+91" onValueChange={field.onChange}>
                            <SelectTrigger className="rounded-e-none">
                              <SelectValue placeholder="Select a prefix" />
                            </SelectTrigger>
                            <SelectContent>
                              <CountryCode />
                            </SelectContent>
                          </Select>
                        </>
                      </FormControl>
                      <FormMessage className="absolute -bottom-5 text-xs text-error" />
                    </FormItem>
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <>
                    <FormItem className="w-full relative">
                      <FormControl>
                        <>
                          <Input
                            className="border-gray-300  bg-white rounded-s-none"
                            type="number"
                            id="phone"
                            placeholder="000-000-0000"
                            {...field}
                          />
                        </>
                      </FormControl>
                      <FormMessage className="absolute -bottom-5 text-xs text-error" />
                    </FormItem>
                  </>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <>
                  <FormItem className="relative">
                    <FormLabel className="text-sm font-normal">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Create password" {...field} />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5 text-xs text-error" />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <>
                  <FormItem className="relative">
                    <FormLabel className="text-sm font-normal">Repeat password</FormLabel>
                    <FormControl>
                      <Input placeholder="Repeat Password" {...field} />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5 text-xs text-error" />
                  </FormItem>
                </>
              )}
            />

            <Button variant="primary" type="submit" className="w-full" disabled={isloading}>
              Sign Up
            </Button>
            <div className="text-center font-normal">
              Already have an account?{" "}
              <Button
                className="text-blue font-medium"
                variant="link"
                onClick={() => navigate("/login")}
              >
                Log in
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Index;
