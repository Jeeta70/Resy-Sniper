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
         <CardContent>
            <Form {...form}>
               <div className="font-medium text-sm text-center mb-4">Your OpenTable phone number</div>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                  <div className="flex">
                     <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                           <>
                              <FormItem className="sm:w-1/3 w-2/12 relative">
                                 <FormControl>
                                    <>
                                       <Select defaultValue="+1" onValueChange={field.onChange}>
                                          <SelectTrigger className="rounded-e-none">
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
                              <FormItem className="w-full mt-auto relative">
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
                                 <FormMessage className="absolute -bottom-5 text-xs" />
                              </FormItem>
                           </>
                        )}
                     />
                  </div>
                  <div className="font-normal text-sm text-center text-light">OpenTable will send you a message with a code</div>
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
