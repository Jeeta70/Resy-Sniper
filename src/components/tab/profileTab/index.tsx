import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as z from "zod";
import { useForm } from "react-hook-form";
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
// import { signupFormSchema } from "@/utils/formZodSchema";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CountryCode } from "@/components";
import { Switch } from "@/components/ui/switch";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";
import ResetPasswordModal from "@/components/model/resetPasswordModal";
import { updateProfileSchema } from "@/utils/formZodSchema";
import { useGetEmailNotification, useGetPhoneNotification, useUpdateEmailNotification, useUpdatePhoneNotification, useUpdateProfile } from "@/features/user/user";

type IUser = {
  phone: string | undefined;
  first_name: string;
  last_name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  country_code: string;
  national_number: string;
};

interface Props {
  user: IUser;
}

const Index = ({ user }: Props) => {
  const { update, isLoading } = useUpdateProfile();
  const { updateEmailNotification, isLoading: updateEmailNotificationisLoading } = useUpdateEmailNotification()
  const { updatePhoneNotification, isLoading: updatePhoneNotificationisLoading } = useUpdatePhoneNotification()
  const { getEmailNotification, isLoading: getEmailNotificationisLoading } = useGetEmailNotification()
  const { getPhoneNotification, isLoading: useGetPhoneNotificationisLoading } = useGetPhoneNotification()


  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      countryCode: `+${user.country_code}`,
      phoneNumber: user.national_number,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof updateProfileSchema>) {
    update(values, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <>
      <div className="">
        <TabsList className="grid border-b-2 xl:pr-[210px] grid-cols-3 gap-10 sm:gap-10 bg-white ">
          <div className="flex flex-col m-0 p-0">
            <TabsTrigger
              value="account"
              className="data-[state=active]:border-b-4 data-[state=active]:border-primary justify-start text-base font-medium pl-0 rounded-t-sm"
            >
              Personal info
            </TabsTrigger>
          </div>
          <div className="flex flex-col m-0 p-0">
            <TabsTrigger
              value="password"
              className="data-[state=active]:border-b-4 data-[state=active]:border-primary justify-start text-base font-medium pl-0 rounded-t-sm"
            >
              Reset Password
            </TabsTrigger>
          </div>
          <div className="flex flex-col m-0 p-0">
            <TabsTrigger
              value="notications"
              className="data-[state=active]:border-b-4 data-[state=active]:border-primary justify-start text-base font-medium pl-0 rounded-t-sm"
            >
              Notifications
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="account" className="mt-0">
          <Card className="border-none">
            <CardContent className="space-y-2 pt-6 px-0">
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
                            <FormItem className="sm:w-6/12 w-5/12">
                              <FormControl>
                                <>
                                  <FormLabel className="text-sm font-normal">
                                    Phone
                                  </FormLabel>
                                  <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                  >
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
                                <Input
                                  className="border-gray-300  bg-white rounded-s-none"
                                  placeholder="000-000-0000"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          </>
                        )}
                      />
                    </div>
                    <Button
                      variant="primary"
                      className="w-full sm:w-28"
                      type="submit"
                      disabled={isLoading}
                    >
                      Save
                    </Button>
                  </form>
                </Form>
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password" className="mt-0">
          <Card className="border-none">
            <CardContent className="space-y-2 pt-6 px-0">
              <CardDescription>
                You can reset your password by pressing a button below
              </CardDescription>
            </CardContent>
            <CardFooter className="px-0">
              <Credenza>
                <CredenzaTrigger asChild>
                  <Button variant="primary" className="w-full sm:w-auto">
                    Reset Password
                  </Button>
                </CredenzaTrigger>
                <ResetPasswordModal />
                {/* <DisconnectResyAccountModel /> */}
              </Credenza>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notications" className="mt-10">
          <div className="flex items-center space-x-2 my-3">
            <Switch id="airplane-mode" defaultChecked={!!getEmailNotification?.data?.email_notifications} disabled={getEmailNotificationisLoading || updateEmailNotificationisLoading} onCheckedChange={(e: boolean) => updateEmailNotification(e)} />
            <Label htmlFor="airplane-mode" className="text-xl">
              Email notications
            </Label>
          </div>
          <div className="flex items-center space-x-2  my-3">
            <Switch id="airplane-mode" defaultChecked={getPhoneNotification?.data?.phone_notifications} disabled={useGetPhoneNotificationisLoading || updatePhoneNotificationisLoading} onCheckedChange={(e: boolean) => updatePhoneNotification(e)} />
            <Label htmlFor="airplane-mode" className="text-xl">
              SMS notifications
            </Label>
          </div>
        </TabsContent>
      </div>
    </>
  );
};

export default Index;
