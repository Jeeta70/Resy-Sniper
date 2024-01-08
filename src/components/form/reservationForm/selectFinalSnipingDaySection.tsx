import { Button } from "@/components/ui/button";
import { useState } from "react";


const DEFAULT_PARTY_SIZE_BUTTONS = [
  { value: "same_day", label: "Same day", type: "button" },
  { value: "2_days_before", label: "2 days before", type: "button" },
  { value: "3_days_before", label: "3 days before", type: "button" },
]


interface IPartySize {
  value: string;
  label: string;
  type: string;
}
[];


const SelectFinalSnipingDaySection = () => {

  const [partySizeArray] = useState<Array<IPartySize>>(DEFAULT_PARTY_SIZE_BUTTONS);

  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Final Sniping Day</p>
      <div className="flex gap-1 sm:gap-3 ">
        {partySizeArray.map((button ,i) => (
          <Button variant="outline" className="inline-flex" key={i}>
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default SelectFinalSnipingDaySection