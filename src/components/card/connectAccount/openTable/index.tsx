import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from "@/components/ui/form";
import { connectOpenTableAccountSchema } from "@/utils/formZodSchema";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CountryCode } from "@/components";



interface ResyConnectAccountCardType {
   image: string;
   cardStyle: string;
}

const Index = ({ image, cardStyle }: ResyConnectAccountCardType) => {
   const form = useForm<z.infer<typeof connectOpenTableAccountSchema>>({
      resolver: zodResolver(connectOpenTableAccountSchema),
      defaultValues: {
         countryCode: "+1",
         phoneNumber: ""
      },
   });

   // 2. Define a submit handler.
   function onSubmit(values: z.infer<typeof connectOpenTableAccountSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
   }

   return (
      <Card className={cardStyle}>
         <CardHeader className="">
            <img src={image} alt="" className="h-10 w-24 mx-auto" />
         </CardHeader>
         <CardContent className="pt-7 flex flex-col gap-4">
            <Form {...form}>
               <div className="font-medium  text-base text-left mb-4 text-light">Your OpenTable phone number</div>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
                  <div className="flex">
                     <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                           <>
                              <FormItem className="relative h-12">
                                 <FormControl className="">
                                    <>
                                       <Select defaultValue="+1"  onValueChange={field.onChange}>
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
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                           <>
                              <FormItem className="w-1/2 sm:w-auto mt-auto relative h-12">
                                 <FormControl>
                                    <>
                                       <Input
                                          className="border-gray-300  bg-white rounded-s-none h-full"
                                          id="phone"
                                          placeholder="000-000-0000"
                                          {...field}
                                       />
                                    </>
                                 </FormControl>
                                 <FormMessage className="absolute -bottom-5 text-xs" />
                              </FormItem>
                           </>
                        )}
                     />
                  </div>
                  <div className="font-normal  text-base w-4/5 mx-auto text-center text-light">OpenTable will send you a message with a code</div>
                  <Button className="w-full" type="submit">
                     Connect
                  </Button>
               </form>
            </Form>
         </CardContent>
      </Card>
   );
};

export default Index;
