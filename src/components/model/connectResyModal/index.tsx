import { Model, ResyConnectAccountCard } from "@/components";
import { CredenzaBody } from "@/components/ui/credenza";


import OpenTableIcon from "@/assets/resy.svg"
const handleDisableContinueButton = () => {

};


const Index = () => {

    return (
        <Model>
            <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
                <ResyConnectAccountCard
                    image={OpenTableIcon}
                    cardStyle={"w-full  mr-0 sm:mr-auto h-96 border-none"}
                    setdisableContinueButton={handleDisableContinueButton}
                />
            </CredenzaBody>
        </Model>
    );
};

export default Index;
