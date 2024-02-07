import { Model } from "@/components";
import { Button } from "@/components/ui/button";
import {
   CredenzaClose,
   CredenzaFooter,
   CredenzaHeader,
} from "@/components/ui/credenza";
import { Separator } from "@/components/ui/separator";

const Index = ({ message }: { message: string }) => {

   return (
      <Model className="border-none max-w-xl">
         <CredenzaHeader className="mx-1">
            <p> {message}</p>
         </CredenzaHeader>
         <Separator />
         <div className="flex flex-row justify-end">

            <CredenzaFooter className="flex flex-row">
               <CredenzaClose asChild >
                  <Button
                     variant="outline"
                     id="closeProModel"
                     className="w-full sm:w-auto"
                     onClick={(e) => e.stopPropagation()}
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