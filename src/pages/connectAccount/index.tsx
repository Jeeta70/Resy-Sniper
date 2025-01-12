import { OpenTableConnectAccountCard, ResyConnectAccountCard } from "@/components";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResyIcon from "@/assets/resy.svg"
import OpenTableIcon from "@/assets/openTable.svg"

const ConnectAccount = () => {
  const navigate = useNavigate()
  const [disableContinueButton, setdisableContinueButton] = useState<boolean>(true)

  return (
    <div className="sm:h-svh sm:w-svw flex flex-col justify-evenly p-4 sm:justify-evenly">
      <div className="mb-3 sm:mb-0 text-center">
        <h1 className="sm:mb-14 text-primary text-4xl font-bold">
          RESERVATION SNIPER
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
          image={ResyIcon}
          cardStyle={"w-full sm:w-[450px] mr-0 sm:ml-auto h-96"}
          setdisableContinueButton={setdisableContinueButton}
        />
        <OpenTableConnectAccountCard
          image={OpenTableIcon}
          cardStyle={"w-full sm:w-[450px] mr-0 sm:mr-auto h-auto"}
          setdisableContinueButton={setdisableContinueButton}
        />
      </div>
      <Button onClick={() => navigate("/reservations")} size="lg" className="w-full sm:w-auto mt-4 sm:mt-0 mx-auto" variant={disableContinueButton ? "grey" : "primary"} type="submit" disabled={disableContinueButton}>
        Continue
      </Button>
    </div>
  );
};

export default ConnectAccount;
