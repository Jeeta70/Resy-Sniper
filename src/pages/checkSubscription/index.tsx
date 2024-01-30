import { FeatureIsForStandardModel } from "@/components";
import { useContext } from "react";
import { UserDetailContext } from "@/context/UserDetailProvider";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";
import { CancelSubscription, FeatureIsForProModel } from "@/components";

const Index = () => {
  const { subscription_type } = useContext(UserDetailContext);




  return (
    <div className="p-10">
      <div className="mb-3 sm:mb-0 sm:h-1/4 text-center">
        <h1 className="mb-3 sm:mb-14 text-primary text-5xl font-bold">
          RESY SNIPER
        </h1>
        <span>
          <h2 className="font-bold text-2xl">Subscription</h2>
        </span>
      </div>
      <div
        className={cn(
          "flex justify-center items-center gap-4 sm:gap-10",
          subscription_type === "standard" ? "flex-col" : "flex-col-reverse"
        )}
      >

        {/* REGULAR CARD */}
        <Card className={"min-w-full sm:min-w-[600px]"}>
          <CardContent className="p-0">
            <div className="sm:flex">
              <div
                className={cn("flex flex-col justify-between p-4 text-white rounded-t-lg sm:rounded-l-lg", "bg-[black] text-[white] border-2 ")}
              >
                <div className="font-semibold  leading-6 mb-2 sm:mb-auto flex justify-between">

                  <p className="uppercase"> REGULAR</p>
                  {subscription_type === "standard" && <p className="text-sm "> Active</p>}
                </div>
                <div>
                  <span className="text-4xl font-semibold">
                    $25
                  </span>
                  <span>.00</span> <span>/month</span>
                </div>
              </div>

              <div className="p-4 flex-1">
                <ul className="flex flex-col gap-4">
                  <li className="flex">
                    <CheckCircle2 />
                    <span className="ml-2 font-semibold text-sm">
                      5 active booking requests
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 className="inline-block" />
                    <span className="ml-2 font-semibold text-sm">
                      Single date, single venue booking
                    </span>
                  </li>
                </ul>
                <Credenza>
                  <CredenzaTrigger asChild>
                    {subscription_type === "standard" && <Button variant="outline" className={`mt-3 w-full sm:w-auto`}>
                      Cancel subsciption
                    </Button>}
                  </CredenzaTrigger>
                  {subscription_type === "standard" && <CancelSubscription />}
                </Credenza>
                <Credenza>
                  <CredenzaTrigger asChild>
                    {subscription_type === "premium" && <Button variant="outline" className={`mt-3 w-full sm:w-auto`}>
                      Switch to Regular
                    </Button>}
                  </CredenzaTrigger>
                  {subscription_type === "premium" && <FeatureIsForStandardModel />}
                </Credenza>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PRO CARD */}
        <Card className={"min-w-full sm:min-w-[600px]"}>
          <CardContent className="p-0">
            <div className="sm:flex">
              <div
                className={cn(
                  "flex flex-col justify-between p-4 text-white rounded-t-lg sm:rounded-l-lg",
                  "bg-[radial-gradient(ellipse_farthest-corner_at_-246%_0,#D62637_73%,rgba(234,58,75,1)_72%,rgba(214,38,55,1))]"
                )}
              >
                <div className="font-semibold  leading-6 mb-2 sm:mb-auto flex justify-between">
                  <p className="uppercase"> Pro</p>
                  {subscription_type === "premium" && <p className="text-sm "> Active</p>}
                </div>
                <div>
                  <span className="text-4xl font-semibold">
                    $ 50
                  </span>
                  <span>.00</span> <span>/month</span>
                </div>
              </div>

              <div className="p-4 flex-1">
                <ul className="flex flex-col gap-4">
                  <li className="flex">
                    <CheckCircle2 className="inline-block" />
                    <span className="ml-2 font-semibold text-sm">
                      25 active booking requests
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 className="inline-block" />
                    <span className="ml-2 font-semibold text-sm">
                      Priority booking
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 className="inline-block" />
                    <span className="ml-2 font-semibold text-sm">
                      Multiple dates and venues booking
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 className="inline-block" />
                    <span className="ml-2 font-semibold text-sm">
                      Same date booking
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 className="inline-block" />
                    <span className="ml-2 font-semibold text-sm">
                      Select sitting type
                    </span>
                  </li>
                </ul>
                <Credenza>
                  <CredenzaTrigger asChild>
                    {subscription_type === "standard" && <Button className={`mt-3 w-full sm:w-auto`}>
                      Switch to Pro
                    </Button>}
                  </CredenzaTrigger>
                  {subscription_type === "standard" && <FeatureIsForProModel />}
                </Credenza>
                <Credenza>
                  <CredenzaTrigger asChild>
                    {subscription_type === "premium" && <Button className={`mt-3 w-full sm:w-auto`}>
                      Cancel Subscription
                    </Button>}
                  </CredenzaTrigger>
                  {subscription_type === "premium" && <CancelSubscription />}
                </Credenza>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
