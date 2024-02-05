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

const Index = ({ restaurantSource }: { restaurantSource: "OpenTable" | "Resy" }) => {
   const { upgrade, isLoading } = useUpgradeSubscription();
   const points = [
      { point: "25 active booking requests" },
      { point: "Priority booking" },
      { point: "Multiple dates and venues booking" },
      { point: "Same date booking" },
      { point: "Select sitting type" },
   ];
   return (
      <Model className="border-none max-w-xl">
         <CredenzaHeader className="mx-1">
            <p> You do not have  <span className="font-bold">{restaurantSource}</span> account connected so you can not select this restaurant.</p>
         </CredenzaHeader>
         <Separator />
         <div className="flex flex-row justify-end">

            <CredenzaFooter className="flex flex-row">
               <CredenzaClose asChild >
                  <Button
                     variant="outline"
                     id="closeProModel"
                     className="w-full sm:w-auto"
                     onClick={(e)=>e.stopPropagation()}
                  >
                     Cancel
                  </Button>
               </CredenzaClose>
            </CredenzaFooter>
         </div>
      </Model>
   );
};

export default Index;