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
import { CancelSubscription } from "@/features/subscription/subscription";

const Index = () => {
    const { Cancel, isLoading } = CancelSubscription()

    const handleClick = () => {
        Cancel();
    }
    return (
        <Model>
            <CredenzaHeader>
                <CardTitle className="mb-5 text-start">
                    Sorry to See You Leave...
                </CardTitle>
                <CredenzaDescription className="text-start">
                    You will continue to have access to Resy Sniper until December 30, 2023
                </CredenzaDescription>
            </CredenzaHeader>
            <Separator />
            <CredenzaFooter className="flex flex-row">
                <CredenzaClose asChild>
                    <Button variant="outline" className="w-full sm:w-auto">
                        Keep Subscription
                    </Button>
                </CredenzaClose>

                <Button variant="primary" className="w-full sm:w-auto" onClick={handleClick} disabled={isLoading}>
                    Cancel Subscription
                </Button>
            </CredenzaFooter>
        </Model>
    );
};

export default Index;
