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
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/reset-password')
    }
    return (
        <Model>
            <CredenzaHeader>
                <CardTitle className="mb-5 text-start">
                    Reset Password
                </CardTitle>
                <CredenzaDescription className="text-start">
                    We'll send you an email with instructions to reset your password
                </CredenzaDescription>
            </CredenzaHeader>
            <Separator />
            <CredenzaFooter className="flex flex-row">
                <CredenzaClose asChild>
                    <Button variant="outline" className="w-full sm:w-auto">
                        Cancel
                    </Button>
                </CredenzaClose>

                <Button variant="primary" className="w-full sm:w-auto" onClick={handleClick}>
                    Reset Password
                </Button>
            </CredenzaFooter>
        </Model>
    );
};

export default Index;
