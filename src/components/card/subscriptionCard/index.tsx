// import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { createAccountCardSchema } from "@/utils/formZodSchema";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// type SubscriptionCardType = React.ComponentProps<typeof Card>;

type point = { point: string };

interface SubscriptionCardType {
  subscriptionType: string;
  points: point[];
}

const Index = ({ subscriptionType, points }: SubscriptionCardType) => {
  // 2. Define a submit handler.
  // function onSubmit(values: z.infer<typeof createAccountCardSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }

  return (
    <Card className={"min-w-[600px]"}>
      <CardContent className="p-0">
        <div className="sm:flex">
          <div
            className={cn(
              "flex flex-col justify-between p-4 text-white rounded-t-lg sm:rounded-l-lg",
              subscriptionType !== "Pro"
                ? "bg-[radial-gradient(ellipse_farthest-corner_at_-246%_0,rgba(48,53,56,1)_68%,rgba(48,53,56,1)_72%,#000_36%)]"
                : "bg-[radial-gradient(ellipse_farthest-corner_at_-246%_0,#D62637_73%,rgba(234,58,75,1)_72%,rgba(214,38,55,1))]"
            )}
          >
            <div className="font-semibold uppercase leading-6 mb-2 sm:mb-auto">
              {subscriptionType}
            </div>
            <div>
              <span className="text-4xl">
                ${subscriptionType !== "Pro" ? "25" : "50"}
              </span>
              .00/month
            </div>
          </div>

          <div className="p-4 flex-1">
            <ul className="flex flex-col gap-4">
              {points.map((point, index) => {
                return (
                  <li className="flex" key={index}>
                    <CheckCircle2 />
                    <span className="ml-2">{point.point}t</span>
                  </li>
                );
              })}
            </ul>
            <Button
              variant={subscriptionType !== "Pro" ? "default" : "destructive"}
              className="mt-3 w-full sm:w-auto"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;
