import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { signupFormSchema } from "@/utils/formZodSchema";
import { ButtonLoader, CountryCode, PrivacyPolicyModal, TermModal } from "@/components";
import { useSignup } from "@/features/authentication/auth";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";

const Index = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useSignup();
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+1",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      termAndConditions: false,
    },
  });

  function onSubmit(values: z.infer<typeof signupFormSchema>) {
    console.log(values);

    // signup(values, { onSuccess: () => form.reset() })
  }
  return (
    <>
      <div className="h-full w-full sm:w-6/12 px-8 flex flex-col justify-center">
        <div className="text-center mt-2 text-[#F94633] hover:text-primary text-4xl font-bold">
          <Link to={"/home"}> RESY SNIPER </Link>
        </div>
        {/* <img src={logo} /> */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 sm:m-auto m-2 w-full"
          >
            <h2 className="text-center font-bold text-2xl mt-2">Sign up</h2>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <>
                  <FormItem className="relative">
                    <FormLabel className="text-sm font-normal">
                      First name
                    </FormLabel>
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
                    <FormLabel className="text-sm font-normal">
                      Last Name
                    </FormLabel>
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
                          <FormLabel className="text-sm font-normal">
                            Phone
                          </FormLabel>
                          <Select
                            defaultValue="+1"
                            onValueChange={field.onChange}
                          >
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
                            type="text"
                            id="phone"
                            placeholder="000-000-0000"
                            {...field}
                            onInput={(e) => {
                              const input = e.target as HTMLInputElement;
                              input.value = input.value.replace(/[^0-9]/g, "");
                              if (input.value.length > 10) {
                                input.value = input.value.slice(0, 10);
                              }
                            }}
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
                    <FormLabel className="text-sm font-normal">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Create password"
                        {...field}
                      />
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
                    <FormLabel className="text-sm font-normal">
                      Repeat password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Repeat Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5 text-xs text-error" />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="termAndConditions"
              render={({ field }) => (
                <>
                  <FormItem className="relative my-auto">
                    <FormControl>
                      <Checkbox
                        id="terms"
                        className=" mr-2 border-light my-auto"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel htmlFor="terms" className="text-sm font-normal my-auto">
                      You agree to our{" "}
                      <span
                        className={cn(
                          buttonVariants({ variant: "link" }),
                          "text-blue cursor-pointer m-0 p-0"
                        )}
                      >
                        <Credenza>
                          <CredenzaTrigger>
                            privacy policy
                          </CredenzaTrigger>
                          <PrivacyPolicyModal />
                        </Credenza>
                   
                        
                      </span>
                      and{" "}
                      <span
                        className={cn(
                          buttonVariants({ variant: "link" }),
                          "text-blue cursor-pointer m-0 p-0"
                        )}
                      >
                        <Credenza>
                          <CredenzaTrigger>
                            terms
                          </CredenzaTrigger>
                          <TermModal />
                        </Credenza>
                     
                      </span>
                      {" "}of service
                    </FormLabel>
                    <FormMessage className="absolute -bottom-5 text-xs text-error" />
                  </FormItem>
                </>
              )}
            />

            <Button
              variant="primary"
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? <ButtonLoader /> : "Sign up"}
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
