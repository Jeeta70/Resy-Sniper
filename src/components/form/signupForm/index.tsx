import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signupFormSchema } from "@/utils/formZodSchema";
import { Dialog } from "@/components";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const Index = () => {
   const navigate = useNavigate();
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signupFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="h-full w-full sm:w-6/12 px-8 flex flex-col justify-center">
        <div className="text-center text-[#F94633] text-5xl font-bold">
          RESY SNIPER
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 m-auto w-full"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <>
                  <FormItem className="">
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <>
                  <FormItem className="">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  <FormItem className="">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  <FormItem className="">
                    <FormControl>
                      <div className="flex">
                        <div className="w-1/4 space-y-2">
                          <FormLabel>Phome</FormLabel>
                          <Select>
                            <SelectTrigger className="rounded-e-none">
                              <SelectValue placeholder="Select a prefix" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="+1">
                                  <img
                                    alt="US Flag"
                                    className="inline-block mr-2"
                                    height={20}
                                    src="/placeholder.svg"
                                    style={{
                                      aspectRatio: "20/20",
                                      objectFit: "cover",
                                    }}
                                    width={20}
                                  />
                                  (+1)
                                </SelectItem>
                                <SelectItem value="+44">
                                  <img
                                    alt="UK Flag"
                                    className="inline-block mr-2"
                                    height={20}
                                    src="/placeholder.svg"
                                    style={{
                                      aspectRatio: "20/20",
                                      objectFit: "cover",
                                    }}
                                    width={20}
                                  />
                                  (+44)
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="w-3/4 space-y-2">
                          <Label
                            className="text-gray-600 dark:text-gray-400 required"
                            htmlFor="phone"
                          >
                            Phone Number
                          </Label>
                          <Input
                            className="border-gray-300  bg-white rounded-s-none"
                            id="phone"
                            placeholder="000-000-0000"
                            required
                          />
                        </div>
                      </div>
                    </FormControl>
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Create password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <>
                  <FormItem className="">
                    <FormLabel>Repeat password</FormLabel>
                    <FormControl>
                      <Input placeholder="Repeat Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />

            <Button variant="primary" type="submit" className="w-full">
              Sign Up
            </Button>
            <div className="text-center font-medium ">
              Already have an account?{" "}
              <span
                className="text-blue-700"
                role="button"
                onClick={() => navigate("/login")}
              >
                Log in
              </span>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Index;
