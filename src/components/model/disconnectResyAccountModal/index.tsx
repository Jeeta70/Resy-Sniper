import { Model } from "@/components";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import {
  CredenzaClose,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
} from "@/components/ui/credenza";
import { Separator } from "@/components/ui/separator";

const Index = () => {
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
          <Button variant="outline" className="w-full sm:w-auto">
            Cancel
          </Button>
        </CredenzaClose>

        <Button variant="primary" className="w-full sm:w-auto">
          Disconnect
        </Button>
      </CredenzaFooter>
    </Model>
  );
};

export default Index;
