import { ButtonLoader, Model } from "@/components";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import {
   CredenzaClose,
   CredenzaFooter,
   CredenzaHeader,
} from "@/components/ui/credenza";
import { Separator } from "@/components/ui/separator";
import { useUpgradeSubscription } from "@/features/subscription/subscription";
import { CheckCircle2 } from "lucide-react";

const Index = () => {
   const { upgrade, isLoading } = useUpgradeSubscription()
   const points = [
      { point: "5 active booking requests" },
      { point: "Priority booking" },
   ];
   return (
      <Model className="border-none max-w-xl">
         <CredenzaHeader>
            <CardTitle className="mb-5 text-2xl text-start font-bold w-4/5">
               This Feature is Available for Pro Subscribers
            </CardTitle>
            <div>
               <span className="text-4xl font-semibold">$50</span>
               <span>.00</span> <span>/month</span>
            </div>
            <div className="p-4 flex-1">
               <ul className="flex flex-col gap-4">
                  {points.map((point, index) => {
                     return (
                        <li className="flex" key={index}>
                           <CheckCircle2 />
                           <span className="ml-2 font-semibold text-sm">
                              {point.point}
                           </span>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </CredenzaHeader>
         <Separator />
         <CredenzaFooter className="flex flex-row">
            <CredenzaClose asChild>
               <Button variant="outline" id="closeProModel" className="w-full sm:w-auto">
                  Cancel
               </Button>
            </CredenzaClose>

            <Button disabled={isLoading}  variant="default" className="w-full sm:w-auto" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
               e.stopPropagation()
               upgrade("standard")
            }}>
               {isLoading ? <ButtonLoader/> : "Upgrade to REGULAR"}
            </Button>
         </CredenzaFooter>
      </Model>
   );
};

export default Index;
