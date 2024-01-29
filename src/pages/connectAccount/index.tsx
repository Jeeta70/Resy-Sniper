import { OpenTableConnectAccountCard, ResyConnectAccountCard } from "@/components";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConnectAccount = () => {
  const navigate = useNavigate()
  const [disableContinueButton, setdisableContinueButton] = useState<boolean>(true)

  return (
    <div className="sm:h-svh sm:w-svw flex flex-col justify-evenly p-4 sm:justify-evenly">
      <div className="mb-3 sm:mb-0 text-center">
        <h1 className="sm:mb-14 text-primary text-4xl font-bold">
          RESY SNIPER
        </h1>
        <span>
          <h2 className="font-bold text-2xl">Connect Accounts</h2>
          <p className="text-light font-normal text-sm">
            At least one account should be connected
          </p>
        </span>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-10 ">
        <ResyConnectAccountCard
          image={"./connectAccount/resy.svg"}
          cardStyle={"w-full sm:w-[450px] mr-0 sm:ml-auto h-96"}
          setdisableContinueButton={setdisableContinueButton}
        />
        <OpenTableConnectAccountCard
          image={"./connectAccount/openTable.svg"}
          cardStyle={"w-full sm:w-[450px] mr-0 sm:mr-auto h-96"}
        />
      </div>
      <Button onClick={() => navigate("/reservations")} size="lg" className="w-full sm:w-auto mt-4 sm:mt-0 mx-auto" variant={disableContinueButton ? "grey" : "primary"} type="submit" disabled={disableContinueButton}>
        Continue
      </Button>
    </div>
  );
};

export default ConnectAccount;
