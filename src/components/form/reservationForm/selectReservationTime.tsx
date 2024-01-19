import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { addDays, format } from 'date-fns';
import { PopoverClose } from '@radix-ui/react-popover';
import { Separator } from '@/components/ui/separator';
// import { ErrorMessage } from '@/components';

const SelectReservationTime = () => {
  const pastMonth = new Date(2020, 10, 15);
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };


  const [range, setRange] = React.useState<DateRange | undefined>(defaultSelected);


  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <>

          <Separator className='mt-3' />
          <p className="flex justify-end mt-4">
            <PopoverClose className=''>
              <Button variant="outline" className="" >
                Cancel
              </Button>
            </PopoverClose>
            <Button variant="default" className=" ml-2 w-2/6">
              Confirm
            </Button>
          </p></>
      );
    }
  }

  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Reservation Time</p>
      <div className="flex gap-3">
        <Button variant="outline" className="inline-flex">
          Early
        </Button>
        <Button variant="outline" className="inline-flex">
          Prime
        </Button>
        <Button variant="outline" className="inline-flex">
          Late
        </Button>
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
      </div>
      {/* <ErrorMessage message='Please set reservation time' /> */}
    </div>
  );
}

export default SelectReservationTime