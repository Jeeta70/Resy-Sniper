import { CountryCode, Model } from "@/components";
import { Button } from "@/components/ui/button";
import {
  CredenzaBody,
  CredenzaHeader,
} from "@/components/ui/credenza";
import { Input } from "@/components/ui/input";


import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { connectOpenTableAccountSchema } from "@/utils/formZodSchema";

import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {

  const form = useForm<z.infer<typeof connectOpenTableAccountSchema>>({
    resolver: zodResolver(connectOpenTableAccountSchema),
    defaultValues: {
      countryCode: "+1",
      phoneNumber: ""
    },
  });

  function onSubmit(values: z.infer<typeof connectOpenTableAccountSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }


  return (
    <Model>
      <CredenzaHeader>
        <img src={"./connectAccount/openTable.svg"} alt="" className="h-10 w-24 mx-auto" />
      </CredenzaHeader>
      <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
        <Form {...form}>
          <div className="font-medium text-sm text-left mb-4">Your OpenTable phone number</div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <div className="flex">
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
                          <Select  onValueChange={field.onChange}>
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
      </CredenzaBody>
      {/* <Separator /> */}
      {/* <CredenzaFooter className="flex flex-row">
        <CredenzaClose asChild>
          <Button variant="outline" className="w-full sm:w-auto">
            Cancel
          </Button>
        </CredenzaClose>

        <Button variant="primary" className="w-full sm:w-auto">
          Connect
        </Button>
      </CredenzaFooter> */}
    </Model>
  );
};

export default Index;
