import { Model } from "@/components";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import {
  CredenzaBody,
  CredenzaClose,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
} from "@/components/ui/credenza";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <Model>
      <CredenzaHeader>
        <CardTitle className="mb-5 text-start">
          Connect OpenTable Account
        </CardTitle>
        <CredenzaDescription className="text-start">
          Please use your Open Table account credentials
        </CredenzaDescription>
      </CredenzaHeader>
      <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
        <CardContent className="p-0">
          <form>
            <div className="grid w-full items-center gap-4 text-left">
              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="OpenTable email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input id="name" placeholder="OpenTable password" />
              </div>
            </div>
          </form>
        </CardContent>
      </CredenzaBody>
      <Separator />
      <CredenzaFooter className="flex flex-row">
        <CredenzaClose asChild>
          <Button variant="outline" className="w-full sm:w-auto">
            Cancel
          </Button>
        </CredenzaClose>

        <Button variant="primary" className="w-full sm:w-auto">
          Connect
        </Button>
      </CredenzaFooter>
    </Model>
  );
};

export default Index;
