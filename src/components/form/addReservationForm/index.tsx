import { Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
  final_sniping_day:z.string(),
});

const Index = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
      final_sniping_day:""
    },
    mode:"onChange"
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="border-2 border-red-600">
      <h1 className=" font-bold text-3xl">Add Reservation</h1>
      <p>Reservation Type</p>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Button type="button">Canceled Reservation</Button>

        <Button type="button" variant="outline">
          Release Reservation
        </Button>
      </div>
      <p>Reasy Sniper will look for Canceled reservation and book it for you</p>

      <p>Reservation Type</p>
      <Button variant="outline" className="hidden sm:inline-flex">
        <Plus className="mr-3" /> Add Reservation
      </Button>

      <p>Reservation Date</p>
      <Button variant="outline" className="hidden sm:inline-flex">
        1
      </Button>
      <Button variant="outline" className="hidden sm:inline-flex">
        2
      </Button>
      <Button variant="outline" className="hidden sm:inline-flex">
        3
      </Button>
      <Button variant="outline" className="hidden sm:inline-flex">
        4
      </Button>
      <Button variant="outline" className="hidden sm:inline-flex">
        <Plus className="mr-3" /> Custom
      </Button>

      <p>Reservation Time</p>
      <Button variant="outline" className="hidden sm:inline-flex">
        Early
      </Button>
      <Button variant="outline" className="hidden sm:inline-flex">
        Prime
      </Button>
      <Button variant="outline" className="hidden sm:inline-flex">
        Late
      </Button>
      <Button variant="outline" className="hidden sm:inline-flex">
        <Plus className="mr-3" /> Custom
      </Button>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="final_sniping_day"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg p-3">

                  <div className="space-y-0.5">
                    <FormLabel>Final Sniping Day</FormLabel>
                    <div>
                      <Input placeholder="Your email" {...field} />
                      <Button
                        role="radio"
                        type="button"
                        variant="outline"
                        className="hidden sm:inline-flex"
                       
                      >
                        Same day
                      </Button>
                      <Button
                        role="radio"
                        type="button"
                        variant="outline"
                        className="hidden sm:inline-flex"
                       
                      >
                        2 days before
                      </Button>
                      <Button
                        role="radio"
                        type="button"
                        variant="outline"
                        className="hidden sm:inline-flex"
                        
                      >
                        3 days before
                      </Button>
                    </div>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="security_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg p-3">
                  {/* {JSON.stringify(field)} */}
                  <div className="space-y-0.5">
                    <FormLabel>Override current reservation</FormLabel>
                    <FormDescription>
                      Resy and Open Table only allow aone reservation at a time.
                      If you enable this option, it will replace your current
                      reservation
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Index;
