import { Button } from "@/components/ui/button";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { UserDetailContext } from "@/context/UserDetailProvider";
import {
  handleFinalSnipingDay,
} from "@/reducer/reservationFormReducer";
import { useContext, useState } from "react";

import ProIcon from "@/assets/ProIcon.svg";

const DEFAULT_PARTY_SIZE_BUTTONS = [
  { value: "same_day", label: "Same day", type: "button" },
  { value: "2_days_before", label: "2 days before", type: "button" },
  { value: "3_days_before", label: "3 days before", type: "button" },
];

interface IPartySize {
  value: string;
  label: string;
  type: string;
}
[];

const SelectFinalSnipingDaySection = () => {
  const {
    dispatch,
    reservationFormState: { finalSnipingDay },
  } = useReservationContext();

  const userDetail = useContext(UserDetailContext);

  const [partySizeArray] = useState<Array<IPartySize>>(
    DEFAULT_PARTY_SIZE_BUTTONS
  );

  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Final Sniping Day</p>
      <div className="flex gap-1 sm:gap-3 ">
        <Button
          variant={finalSnipingDay === "any" ? "default" : "outline"}
          className="inline-flex"
          onClick={() => {
            handleFinalSnipingDay(dispatch, "any");
          }}
        >
          Any
        </Button>

        {userDetail.subscription_type === "standard" ? (
          <>
            {" "}
            {partySizeArray.map((button, i) => (
              <Button
                variant={
                  finalSnipingDay === button.value ? "default" : "outline"
                }
                className="inline-flex relative"
                key={i}
              >
                {button.label} <img
                  src={ProIcon}
                  alt="pro icon"
                  className="absolute right-0 top-0"
                />
              </Button>
            ))}
          </>
        ) : (
          <>
            {" "}
            {partySizeArray.map((button, i) => (
              <Button
                variant={
                  finalSnipingDay === button.value ? "default" : "outline"
                }
                className="inline-flex"
                key={i}
                onClick={() => {
                  handleFinalSnipingDay(dispatch, button.value);
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
