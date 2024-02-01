
import { ButtonLoader } from "@/components";
import { Button } from "@/components/ui/button";
import { CredenzaClose } from "@/components/ui/credenza";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useResetPassword } from "@/features/authentication/auth";
import { useState } from "react";

const Index = () => {
   const { resetPassword ,isLoading } = useResetPassword()
   const [email, setEmail] = useState<string>("")
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   return (
      <>

         <Dialog>
            <DialogTrigger asChild>
               <Button variant="link" className="w-full text-center text-blue-700 font-medium ">
                  Forgot password ?
               </Button>
            </DialogTrigger>
            <DialogContent
               className="sm:max-w-2xl absolute top-[84%] sm:top-[40%]"
            >
               <DialogHeader>
                  <DialogTitle>Forgot Password?</DialogTitle>
                  <DialogDescription>
                     Please provide the email associated with your account, and we will
                     send you instructions on resetting your password
                  </DialogDescription>
               </DialogHeader>
               <div className="grid gap-4 py-4">
                  <div className="">
                     <Input id="email" type="email" placeholder="Your email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                  </div>
               </div>
               <DialogFooter className="">
                  <CredenzaClose asChild>
                     <Button variant="outline" className="w-auto sm:w-auto">
                        Cancel
                     </Button>
                  </CredenzaClose>
                  <Button type="submit" disabled={!emailRegex.test(email) || isLoading} variant="primary" onClick={() => resetPassword({ email })}>
                     {isLoading ? <ButtonLoader /> : "Reset Password"}
                  </Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>

      </>
   );
};

export default Index;
