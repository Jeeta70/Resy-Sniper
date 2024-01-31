import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import {
   connectOpenTableAccountSchema,
   enterCodeSechema,
} from "@/utils/formZodSchema";
import {
   useConnectOpenTableAccount,
   useOpenTableCode,
} from "@/features/authentication/connectAccount";
import { useState } from "react";
import { ButtonLoader, CountryCode } from "@/components";
import {
   Select,
   SelectContent,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

interface Props {
   setdisableContinueButton?: (boolean: boolean) => void;
}

const Index = ({ setdisableContinueButton }: Props) => {
   const [responseState, setResponseState] = useState<
      "default" | "entercode" | "error" | "success"
   >("entercode");

   const { connectOpenTableAccount, isLoading } = useConnectOpenTableAccount();
   const { openTableCode, isLoading: openTableCodeisLoading } =
      useOpenTableCode();
   const connectOpenTableForm = useForm<
      z.infer<typeof connectOpenTableAccountSchema>
   >({
      resolver: zodResolver(connectOpenTableAccountSchema),
      defaultValues: {
         countryCode: "+1",
         phoneNumber: "",
      },
   });

   const enterCodeForm = useForm<z.infer<typeof enterCodeSechema>>({
      resolver: zodResolver(enterCodeSechema),
      defaultValues: {
         code: "",
      },
   });

   // 2. Define a submit handler.
   function onSubmitConnectTableAccount(
      values: z.infer<typeof connectOpenTableAccountSchema>
   ) {
      connectOpenTableAccount(values, {
         onSuccess: () => {
            connectOpenTableForm.reset();
            setResponseState("entercode");
         },
      });
   }

   function onCodeSubmit(values: z.infer<typeof enterCodeSechema>) {
      openTableCode(values, {
         onSuccess: () => {
            enterCodeForm.reset();
            setResponseState("success");
            if(setdisableContinueButton){
               setdisableContinueButton(false);
            }
         },
         onError:() =>{
            setResponseState("error");
         }
      });
   }

   return (
      <>
         {responseState === "default" && (
            <CardContent>
               <Form {...connectOpenTableForm}>
                  <FormLabel className="text-sm font-normal block my-3">
                     Your OpenTable phone number
                  </FormLabel>
                  <form
                     onSubmit={connectOpenTableForm.handleSubmit(
                        onSubmitConnectTableAccount
                     )}
                     className="space-y-9"
                  >
                     <div className="flex">
                        <FormField
                           control={connectOpenTableForm.control}
                           name="countryCode"
                           render={({ field }) => (
                              <>
                                 <FormItem className="relative">
                                    <FormControl className="">
                                       <>
                                          <Select
                                             defaultValue="+1"
                                             onValueChange={field.onChange}
                                          >
                                             <SelectTrigger className="rounded-e-none h-full">
                                                <SelectValue placeholder="Select a prefix" />
                                             </SelectTrigger>
                                             <SelectContent position="popper">
                                                <CountryCode />
                                             </SelectContent>
                                          </Select>
                                       </>
                                    </FormControl>
                                    <FormMessage className="absolute -bottom-5 text-xs" />
                                 </FormItem>
                              </>
                           )}
                        />
                        <FormField
                           control={connectOpenTableForm.control}
                           name="phoneNumber"
                           render={({ field }) => (
                              <>
                                 <FormItem className="w-1/2 sm:w-auto mt-auto relative h-12 flex-1">
                                    <FormControl>
                                       <>
                                          <Input
                                             className="border-gray-300  bg-white rounded-s-none h-full"
                                             id="phone"
                                             placeholder="000-000-0000"
                                             {...field}
                                             onInput={(e) => {
                                                const input = e.target as HTMLInputElement;
                                                input.value = input.value.replace(
                                                   /[^0-9]/g,
                                                   ""
                                                );
                                                if (input.value.length > 10) {
                                                   input.value = input.value.slice(0, 10);
                                                }
                                             }}
                                          />
                                       </>
                                    </FormControl>
                                    <FormMessage className="absolute -bottom-5 text-xs" />
                                 </FormItem>
                              </>
                           )}
                        />
                     </div>
                     <div className="font-normal  text-base w-4/5 mx-auto  text-center text-light">
                        OpenTable will send you a message with a code
                     </div>
                     <Button disabled={isLoading} className="w-full mt-auto" type="submit">
                        {isLoading ? <ButtonLoader /> : "Connect"}{" "}
                     </Button>
                  </form>
               </Form>
            </CardContent>
         )}
         {responseState === "entercode" && (
            <CardContent className="pt-5">
               <Form {...enterCodeForm}>
                  <div className="text-sm font-normal">
                     Code from message
                  </div>
                  <form
                     onSubmit={enterCodeForm.handleSubmit(onCodeSubmit)}
                     className="space-y-8 w-full mt-2"
                  >
                     <div className="flex">
                        <FormField
                           control={enterCodeForm.control}
                           name="code"
                           render={({ field }) => (
                              <>
                                 <FormItem className="sm:w-auto mt-auto relative h-12 flex-1">
                                    <FormControl>
                                       <>
                                          <Input
                                             className="border-gray-300  bg-white h-full"
                                             id="phone"
                                             placeholder="Code from message"
                                             {...field}
                                             onInput={(e) => {
                                                const input = e.target as HTMLInputElement;
                                                input.value = input.value.replace(
                                                   /[^0-9]/g,
                                                   ""
                                                );
                                                if (input.value.length > 10) {
                                                   input.value = input.value.slice(0, 10);
                                                }
                                             }}
                                          />
                                       </>
                                    </FormControl>
                                    <FormMessage className="absolute -bottom-5 text-xs" />
                                 </FormItem>
                              </>
                           )}
                        />
                     </div>
                     <div className="font-normal  text-base w-4/5 mx-auto text-center text-light">
                        If you haven’t receive code for more than a minute press a link
                        below
                     </div>
                     <Button
                        disabled={openTableCodeisLoading}
                        className="w-full"
                        type="submit"
                     >
                        {openTableCodeisLoading ? <ButtonLoader /> : "Submit"}
                     </Button>
                  </form>
               </Form>
            </CardContent>
         )}
         {responseState === "success" && (
            <CardContent className="grid gap-14">
               <img
                  src="./connectAccount/connectedTick.svg"
                  alt=""
                  srcSet=""
                  className="mx-auto"
               />

               <div className="space-y-1">
                  <p className="text-sm font-medium text-light text-center">
                     Your OpenTable account successfully connected
                  </p>
               </div>

               <Button className="w-full" type="submit" variant="selected" disabled>
                  Connected
               </Button>
               {/* </div> */}
            </CardContent>
         )}

         {responseState === "error" && (
            <CardContent className="grid gap-12 h-4/6">
               {/* <div className="item-center space-y-10"> */}
               <img
                  src="./connectAccount/incorrectPasswordIcon.svg"
                  alt=""
                  srcSet=""
                  className="mx-auto mt-9"
               />

               <div className="space-y-1">
                  <p className="text-sm font-medium text-light text-center">
                    Wrong code
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
               {/* </div> */}
            </CardContent>
         )}
      </>
   );
};

export default Index;
