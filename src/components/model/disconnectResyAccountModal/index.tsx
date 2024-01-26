import { ButtonLoader, Model } from "@/components";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import {
  CredenzaClose,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
} from "@/components/ui/credenza";
import { Separator } from "@/components/ui/separator";
import { useDisconnectConnectResyAccount } from "@/features/authentication/connectAccount";

const Index = () => {
  const { discconetResyAccount ,isLoading } =  useDisconnectConnectResyAccount()
  return (
    <Model>
      <CredenzaHeader>
        <CardTitle className="mb-5 text-start">
          Disconnect Resy Account?
        </CardTitle>
        <CredenzaDescription className="text-start">
          All your Resy related Reservation Request will be canceled. Are you
          sure you want to disconnect?
        </CredenzaDescription>
      </CredenzaHeader>
      <Separator />
      <CredenzaFooter className="flex flex-row">
        <CredenzaClose asChild>
          <Button variant="outline" className="w-full sm:w-auto" id="dissconnetResyConnect">
            Cancel
          </Button>
        </CredenzaClose>

        <Button disabled={isLoading} variant="primary" className="w-full sm:w-auto" onClick={() => discconetResyAccount()}>
         
          {isLoading ? <ButtonLoader /> : "Disconnect"}
        </Button>
      </CredenzaFooter>
    </Model>
  );
};

export default Index;
