import { Card, CardContent, CardDescription, CardFooter, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { signupFormSchema } from "@/utils/formZodSchema";
import { Select, SelectContent, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { CountryCode } from "@/components";
import { Switch } from "@/components/ui/switch";

type IUser = {
  first_name: string
  last_name:string
  email:string
}

interface Props {
  user: IUser
}

const Index = ({ user }: Props) => {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      countryCode: "",
      phoneNumber: "",
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
      <TabsList className="grid sm:w-2/4 grid-cols-3 gap-20 sm:gap-10 bg-white">
        <TabsTrigger
          value="account"
          className="data-[state=active]:border-b-2 data-[state=active]:border-primary justify-start  text-sm font-medium"
        >
          Personal info
        </TabsTrigger>
        <TabsTrigger
          value="password"
          className="data-[state=active]:border-b-2 data-[state=active]:border-primary justify-start text-sm font-medium"
        >
          Reset Password
        </TabsTrigger>
        <TabsTrigger
          value="notications"
          className="data-[state=active]:border-b-2 data-[state=active]:border-primary justify-start text-sm font-medium"
        >
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-0">
        <Card className="border-none">
          <CardContent className="space-y-2 pt-6">
            <div className="h-full w-full flex flex-col justify-center">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className=" m-auto w-full grid sm:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-7"
                >
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <>
                        <FormItem className="">
                          <FormLabel className="text-sm font-normal">
                            First name
                          </FormLabel>
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
                          <FormLabel className="text-sm font-normal">
                            Last name
                          </FormLabel>
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
                          <FormLabel className="text-sm font-normal">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />
                  <div className="flex items-end space-y-2">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                        <>
                          <FormItem className="sm:w-1/3 w-2/12">
                            <FormControl>
                              <>
                                <FormLabel className="text-sm font-normal">
                                  Phone
                                </FormLabel>
                                <Select onValueChange={field.onChange}>
                                  <SelectTrigger className="rounded-e-none">
                                    <SelectValue placeholder="Select a prefix" />
                                  </SelectTrigger>
                                  <SelectContent position="popper">
                                    <CountryCode />
                                  </SelectContent>
                                </Select>
                              </>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <>
                          <FormItem className="w-full">
                            <FormControl>
                              <>
                                <Input
                                  className="border-gray-300  bg-white rounded-s-none"
                                  id="phone"
                                  placeholder="000-000-0000"
                                  {...field}
                                />
                              </>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                  </div>
                </form>
              </Form>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary" className="w-full sm:w-auto">
              Save
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password" className="mt-0">
        <Card className="border-none">
          <CardContent className="space-y-2 pt-6 ">
            <CardDescription>
              You can reset your password by pressing a button below
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="primary" className="w-full sm:w-auto">
              Reset Password
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="notications" className="mt-10">
        <div className="flex items-center space-x-2 my-3">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode" className="text-xl">
            Email notications
          </Label>
        </div>
        <div className="flex items-center space-x-2  my-3">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode" className="text-xl">
            SMS notifications
          </Label>
        </div>
      </TabsContent>
    </>
  );
};

export default Index;
