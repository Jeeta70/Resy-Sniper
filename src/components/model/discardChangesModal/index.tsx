import { Button } from "@/components/ui/button";
import { CredenzaClose } from "@/components/ui/credenza";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { resetReservationForm } from "@/reducer/reservationFormReducer";
import { ReactNode } from "react";

const Index = ({ children }: { children: ReactNode }) => {
   const { dispatch } = useReservationContext()
   return (
      <>
         <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
               <DialogHeader>
                  <DialogTitle>Discard Changes?</DialogTitle>
                  <DialogDescription>
                     You have made changes to the reservation. Would you like to discard them ?
                  </DialogDescription>
               </DialogHeader>
               <Separator />
               <DialogFooter>
                  <CredenzaClose asChild>
                     <Button variant="outline" className="w-full sm:w-auto">
                        Keep Editing
                     </Button>
                  </CredenzaClose>
                  <CredenzaClose asChild>
                     <Button type="submit" variant="primary" onClick={() => resetReservationForm(dispatch)}>
                        Discard Changes
                     </Button>
                  </CredenzaClose>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </>
   );
};

export default Index;
