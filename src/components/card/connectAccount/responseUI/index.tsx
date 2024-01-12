import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { connectResyAccountSchema } from "@/utils/formZodSchema";
import { useConnectResyAccount } from "@/features/authentication/connectAccount";
import { useState } from "react";

interface Props {
   setdisableContinueButton: (boolean:boolean) => void
}

const Index = ({ setdisableContinueButton }: Props) => {
   const { connectResyAccount, isLoading } = useConnectResyAccount();
   const [responseState, setResponseState] = useState<"default" | "success" | "error">("default");

   const form = useForm<z.infer<typeof connectResyAccountSchema>>({
      resolver: zodResolver(connectResyAccountSchema),
      defaultValues: {
         email: "donotreply@resysniper.com",
         password: "Pa$sw0rd23!25Vv",
      },
   });

   function onSubmit(values: z.infer<typeof connectResyAccountSchema>) {
      connectResyAccount(values, {
         onSuccess: () => {
            setResponseState("success");
            form.reset();
            setdisableContinueButton(false);
         },
         onError: () => {
            setResponseState("error");
         },
      });
   }

   

   return (
      <>
         {responseState === "default" && (
            <CardContent>
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem className="relative">
                              <FormLabel className="text-sm font-normal">Email</FormLabel>
                              <FormControl>
                                 <Input placeholder="Your email" {...field} />
                              </FormControl>
                              <FormMessage className="absolute -bottom-5 text-xs" />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                           <FormItem className="relative">
                              <FormLabel className="text-sm font-normal">
                                 Password
                              </FormLabel>
                              <FormControl>
                                 <Input placeholder="Your password" {...field} />
                              </FormControl>
                              <FormMessage className="absolute -bottom-5 text-xs" />
                           </FormItem>
                        )}
                     />
                     <Button className="w-full" type="submit" disabled={isLoading}>
                        Connect
                     </Button>
                  </form>
               </Form>
            </CardContent>
         )}
         {responseState === "success" && (
            <CardContent className="grid gap-4 h-4/6">
               <div className="item-center space-y-10">
                  <img
                     src="./connectAccount/connectedTick.svg"
                     alt=""
                     srcSet=""
                     className="mx-auto"
                  />

                  <div className="space-y-1">
                     <p className="text-sm font-medium text-light text-center">
                        Your Resy account successfully connected
                     </p>
                  </div>

                  <Button
                     className="w-full"
                     type="submit"
                     variant="selected"
                     disabled
                  >
                     Connected
                  </Button>
               </div>
            </CardContent>
         )}

         {responseState === "error" && (
            <CardContent className="grid gap-4 h-4/6">
               <div className="item-center space-y-10">
                  <img
                     src="./connectAccount/incorrectPasswordIcon.svg"
                     alt=""
                     srcSet=""
                     className="mx-auto"
                  />

                  <div className="space-y-1">
                     <p className="text-sm font-medium text-light text-center">
                        Email and password do not match
                     </p>
                  </div>

                  <Button
                     className="w-full"
                     type="submit"
                     variant="default"
                     onClick={() => setResponseState("default")}
                  >
                     TryAgain
                  </Button>
               </div>
            </CardContent>
         )}
      </>
   );
};

export default Index;
