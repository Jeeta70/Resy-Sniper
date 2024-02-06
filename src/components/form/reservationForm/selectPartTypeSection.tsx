import { ErrorMessage, FeatureIsForProModel } from "@/components";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { UserDetailContext } from "@/context/UserDetailProvider";
import { handleButtonClickPartySize } from "@/reducer/reservationFormReducer";
import { useContext, useEffect, useState } from "react";

import ProIcon from "@/assets/ProIcon.svg"
import { cn } from "@/lib/utils";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";

interface IPartySize {
  value: string | number;
  label: string;
  type: string;
}

const DEFAULT_PARTY_SIZE_BUTTONS = [
  { value: 2, label: "2", type: "button" },
  { value: 4, label: "4", type: "button" },
  // { value: 3, label: "3", type: "button" },
  // { value: 4, label: "4", type: "button" },
]


const SelectPartySizeSection = () => {
  const userDetail = useContext(UserDetailContext)
  const { dispatch, reservationFormState: { partySize, errors: { partySizeError } } } = useReservationContext();

  const [partySizeArray, setPartySizeArray] = useState<Array<IPartySize>>(DEFAULT_PARTY_SIZE_BUTTONS);

  useEffect(() => {
    if (Number(partySize) >= 3) setPartySizeArray([...DEFAULT_PARTY_SIZE_BUTTONS, { value: Number(partySize), label: partySize.toString(), type: "button" }])
  }, [partySize]);


  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Party size</p>
      <div className="flex gap-3">
        {partySizeArray.map((button) => {
          return (
            <Button
              key={button.label}
              role="button"
              onClick={() => handleButtonClickPartySize(dispatch, Number(button.value))}
              variant={partySize === Number(button.value) ? "default" : "outline"}
              className="inline-flex"
            >
              {button.label}
            </Button>
          );
        })}



        {userDetail.subscription_type === "standard" ? (
          <Credenza>
            <CredenzaTrigger asChild>
              <span
                className={cn(buttonVariants({ variant: "outline" }), "relative cursor-pointer")}
              >
                Custom
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

        ) : (
          <Select
            onValueChange={(e) =>
              handleButtonClickPartySize(dispatch, parseInt(e) + 3)
            }
          >
            <SelectTrigger className="w-auto flex-row-reverse gap-4 text-light relative">
              Custom
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Array(8)
                  .fill("")
                  .map((_, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {5 + index}
                      {" people"}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>)}

      </div>
      {partySizeError && !partySize && <ErrorMessage message='Please select a part size' />}

    </div>
  );
};

export default SelectPartySizeSection;
