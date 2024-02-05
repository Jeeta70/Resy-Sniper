import { Button, buttonVariants } from "@/components/ui/button";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { UserDetailContext } from "@/context/UserDetailProvider";
import { handleFinalSnipingDay } from "@/reducer/reservationFormReducer";
import { useContext, useState } from "react";

import ProIcon from "@/assets/ProIcon.svg";
import { cn } from "@/lib/utils";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";
import { FeatureIsForProModel } from "@/components";
import { toast } from "@/components/ui/use-toast";

const DEFAULT_PARTY_SIZE_BUTTONS = [
  { value: "1_days_before", label: "1 days before", type: "button" },
  { value: "2_days_before", label: "2 days before", type: "button" },
  { value: "5_days_before", label: "Custom", type: "button" },
];

interface IPartySize {
  value: string;
  label: string;
  type: string;
}
[];


const SelectFinalSnipingDaySection = () => {
  const [newDay, setNewDay] = useState<string | undefined>();

  const {
    dispatch,
    reservationFormState: { finalSnipingDay, reservationDates },
  } = useReservationContext();

  const userDetail = useContext(UserDetailContext);

  const [partySizeArray] = useState<Array<IPartySize>>(
    DEFAULT_PARTY_SIZE_BUTTONS
  );

  const setTheSnipingDay = (value: string) => {
    if (reservationDates.length === 0) {
      toast({ description: "Please select Reservation Date First", variant: 'dark' });
    } else {
      const reservationDate = new Date(reservationDates[0]);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (reservationDate.getTime() === today.getTime()) {
        toast({ description: "Reservation Date is Today", variant: 'dark' });
      } else {
        const daysBefore = parseInt(value);
        const calculatedDate = calculateFinalSnipingDate(daysBefore);
        setNewDay(value)
        handleFinalSnipingDay(dispatch, calculatedDate);
      }
    }
  };

  const calculateFinalSnipingDate = (daysBefore: number): string => {
    const currentDate = new Date(reservationDates[0]);
    currentDate.setDate(currentDate.getDate() - daysBefore);
    const formattedDate = currentDate.toISOString().split('T')[0];
    return formattedDate;
  };
  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Final Sniping Day</p>
      <div className="flex gap-1 sm:gap-3 ">
        <Button
          variant={finalSnipingDay === "none" ? "default" : "outline"}
          className="inline-flex"
          onClick={() => {
            handleFinalSnipingDay(dispatch, "none");
          }}
        >
          None
        </Button>

        {userDetail.subscription_type === "standard" ? (
          <>
            {partySizeArray.map((button, i) => (
              <Credenza key={i} >
                <CredenzaTrigger asChild>
                  <span
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "relative cursor-pointer"
                    )}
                  >
                    {button.label}{" "}
                    <img
                      src={ProIcon}
                      alt="pro icon"
                      className="absolute right-0 top-0"
                    />
                    {
                      <img
                        src={ProIcon}
                        alt="pro icon"
                        className="absolute right-0 top-0"
                      />
                    }
                  </span>
                </CredenzaTrigger>
                <FeatureIsForProModel />
              </Credenza>
            ))}
          </>
        ) : (
          <>
            {" "}
            {partySizeArray.map((button, i) => (
              <Button
                variant={
                  button?.value === newDay ? "default" : "outline"
                }
                className="inline-flex"
                key={i}
                onClick={() => {
                  setTheSnipingDay(button?.value);
                }}
              >
                {button.label}
              </Button>
            ))}

          </>
        )}
      </div>
    </div>
  );
};

export default SelectFinalSnipingDaySection;
