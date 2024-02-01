import React, { useEffect } from "react";
import { format } from "date-fns";

import { Button, buttonVariants } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { PopoverClose } from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { ErrorMessage } from "@/components";
import { X } from "lucide-react";
import { handleReservationDate } from "@/reducer/reservationFormReducer";
import { useReservationContext } from "@/context/ReservationFomProvider";
// import { UserDetailContext } from "@/context/UserDetailProvider";

// import ProIcon from "@/assets/ProIcon.svg";
// import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";

const pastMonth = new Date(2020, 10, 15);

interface IReservationDateSize {
  value:  Date;
  label: string | Date;
  type: string;
}
[];

// const RESERVATION_DATE_BUTTONS = [
//   { value: new Date(), label: "Today", type: "button" },
//   {
//     value: new Date(+new Date() + 86400000),
//     label: "Tommorow",
//     type: "button",
//   },
// ];

const SelectReservationDateSection = () => {
  // const userDetail = useContext(UserDetailContext);
  const { dispatch, reservationFormState: { reservationDates, errors: { reservationDateError } } } = useReservationContext();
  const initialDays: Date[] = [];
  const [days, setDays] = React.useState<Date[] | undefined>(initialDays);


  const [reservationDate, setReservationDates] = React.useState<Array<IReservationDateSize>>([]);
  const [selected, setSelected] = React.useState<Array<Date>>([]);

  // useEffect(() => {
  //   if (selected.length !== 0 ) setSelected((prev) => prev.filter((dateOnButton) => days?.includes(dateOnButton as Date)))
  // }, [days])


  useEffect(() => {
    setDays((prev) => prev?.filter((dateInCalendarModal) => selected.includes(dateInCalendarModal)))
    return handleReservationDate(dispatch, selected);
  }, [dispatch, selected]);

  function handleSelectedButton(checkDate:  Date, compare: boolean) {
    if (compare) {
      if (selected.includes(checkDate)) {
        return setSelected((prev) => prev.filter((date) => date !== checkDate));
      } else {
        return setSelected((prev) => [...prev, checkDate]);
      }
    } else {
      return setSelected((prev) => [...prev, checkDate]);
    }
  }

  const footer =
    days && days.length > 0 ? (
      <>
        <Separator className="mt-3" />
        <p className="flex justify-end mt-4 gap-3">
          <PopoverClose>
            <span className={cn(buttonVariants({ variant: "outline" }))}>
              Cancel
            </span>
          </PopoverClose>
          <PopoverClose>
            <span
              className={cn(buttonVariants({ variant: "primary" }))}
              onClick={() => {
                setReservationDates((prev) => {
                  days.forEach((day) => {
                    const check = prev.some((prev) => prev.value === day);
                    if (!check) {
                      prev.push({
                        value: day,
                        label: format(day, "PP"),
                        type: "button",
                      });
                    }
                  });
                  return [...prev];
                });
                days.forEach((day) => {
                  handleSelectedButton(day, false);
                });
              }}
            >
              Confirm
            </span>
          </PopoverClose>
        </p>
      </>
    ) : (
      <p>Please pick one or more days.</p>
    );

  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Reservation Date</p>
      <div className="flex gap-3 flex-wrap">
        {reservationDate.map((button, i) => {
          if (selected.includes(button.value)) {
            return (
              <span
                key={i}
                className={cn(
                  buttonVariants({
                    variant: selected.includes(button.value)
                      ? "default"
                      : "outline",
                  }),
                  "inline-flex cursor-pointer"
                )}
              >
                {button.label.toLocaleString()}{" "}
                {i >= 0 && (
                  <X
                    onClick={() => {
                      handleSelectedButton(button.value, true)
                      setReservationDates((prev) => {
                        return prev.filter((p) => p.value !== button.value);
                      });
                    }}
                    size={15}
                  />
                )}
              </span>
            )
          }

        })}
        {/* {userDetail.subscription_type === "standard" ? (
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
        ) : ( */}
        <Select disabled onValueChange={(e) => console.log(e)}>
          <Popover>
            <PopoverTrigger
              asChild
            // disabled={userDetail.subscription_type === "standard"}
            >
              <Button variant="outline" className=" text-light relative">
                Custom
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                onDayClick={(e) => {
                  setSelected((d)=>{
                    const indexToRemove = d.findIndex(date => date.getDate() === e.getDate());
                    if (indexToRemove !== -1) {
                      d.splice(indexToRemove, 1)
                    }
                    return d
                  })

                  // If the date is found, remove it from the array
                 }}
                id="test"
                mode="multiple"
                defaultMonth={pastMonth}
                selected={days}
                footer={footer}
                onSelect={setDays}
                month={new Date()}
              />
            </PopoverContent>
          </Popover>
        </Select>
        {/* )} */}
      </div>

      {reservationDateError && !reservationDates.length && <ErrorMessage message="Please set reservation date" />}

    </div>
  );
};

export default SelectReservationDateSection;
