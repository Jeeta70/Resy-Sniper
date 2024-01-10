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
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { createAccountCardSchema } from "@/utils/formZodSchema";



interface ResyConnectAccountCardType {
   image: string;
   cardStyle: string;
}

const Index = ({ image, cardStyle }: ResyConnectAccountCardType) => {
   const form = useForm<z.infer<typeof createAccountCardSchema>>({
      resolver: zodResolver(createAccountCardSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   // 2. Define a submit handler.
   function onSubmit(values: z.infer<typeof createAccountCardSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
   }

   return (
      <Card className={cardStyle}>
         <CardHeader>
            <img src={image} alt="" className="h-10 w-24" />
         </CardHeader>
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
                           <FormLabel className="text-sm font-normal">Password</FormLabel>
                           <FormControl>
                              <Input placeholder="Your password" {...field} />
                           </FormControl>
                           <FormMessage className="absolute -bottom-5 text-xs" />
                        </FormItem>
                     )}
                  />
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
