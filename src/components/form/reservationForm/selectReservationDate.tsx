import React from 'react'
import { DateRange } from 'react-day-picker';
import { addDays, format } from 'date-fns';


import { Button, buttonVariants } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { PopoverClose } from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';
import { ErrorMessage } from '@/components';

const pastMonth = new Date(2020, 10, 15);
const defaultSelected: DateRange = {
  from: pastMonth,
  to: addDays(pastMonth, 4),


}

interface IReservationDateSize {
  value: string;
  label: string;
  type: string;
}
[];


const RESERVATION_DATE_BUTTONS = [
  { value: "today", label: "Today", type: "button" },
  { value: "Tommorow", label: "Tommorow", type: "button" },
]

const SelectReservationDateSection = () => {
  const [range, setRange] = React.useState<DateRange | undefined>(defaultSelected);
  // console.log(format(range.from, "PPP"));

  const [reservationDates] = React.useState<Array<IReservationDateSize>>(RESERVATION_DATE_BUTTONS);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <>
          <Separator className='mt-3' />
          <p className="flex justify-end mt-4">
            <PopoverClose className='' >
              <span className={cn(buttonVariants({ variant: "outline" }))} >
                Cancel
              </span>
            </PopoverClose>
            <Button variant="default" className=" ml-2 w-2/6">
              Confirm
            </Button>
          </p>
        </>
      );
    }
  }

  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Reservation Date</p>
      <div className="flex gap-3">

        {reservationDates.map((button, i) => (
          <Button key={i} variant="outline" className="inline-flex">
            {button.label}
          </Button>
        ))}

        <Select onValueChange={(e) => console.log(e)}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className=" text-light ">
                Custom
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                id="test"
                mode="range"
                defaultMonth={pastMonth}
                selected={range}
                footer={footer}
                onSelect={setRange}
              />
            </PopoverContent>
          </Popover>
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
              {/* <SelectItem value={""}>{"index"}</SelectItem> */}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ErrorMessage message='Please set reservation date' />
    </div>
  );
}

export default SelectReservationDateSection