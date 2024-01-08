import { ErrorMessage } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { handleButtonClickPartySize } from "@/reducer/reservationFormReducer";
import { useEffect, useState } from "react";

interface IPartySize {
  value: string | number;
  label: string;
  type: string;
}

const DEFAULT_PARTY_SIZE_BUTTONS = [
  { value: 1, label: "1", type: "button" },
  { value: 2, label: "2", type: "button" },
  { value: 3, label: "3", type: "button" },
  { value: 4, label: "4", type: "button" },
]


const SelectPartySizeSection = () => {
  const { dispatch, reservationFormState: {  partySize }} = useReservationContext();

  const [partySizeArray, setPartySizeArray] = useState<Array<IPartySize>>(DEFAULT_PARTY_SIZE_BUTTONS);

  useEffect(() => {
    if (Number(partySize) >= 5) setPartySizeArray([...DEFAULT_PARTY_SIZE_BUTTONS, { value: Number(partySize), label: partySize.toString(), type: "button" }])
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
              onClick={() =>
                handleButtonClickPartySize(dispatch, Number(button.value))
              }
              variant={
                partySize === Number(button.value)
                  ? "default"
                  : "outline"
              }
              className="inline-flex"
            >
              {button.label}
            </Button>
          );
        })}
        <Select
          onValueChange={(e) =>
            handleButtonClickPartySize(dispatch, parseInt(e) + 5)
          }
        >
          <SelectTrigger className="w-auto flex-row-reverse gap-4 text-light">
            Custom
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {5 + index}
                    {" people"}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ErrorMessage message='Please select a part size' />
    </div>
  );
};

export default SelectPartySizeSection;
