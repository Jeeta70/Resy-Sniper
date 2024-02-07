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
import { formatDate, getDayBefore, isToday, isTommorrow } from "../../../utils/healper";
import { Select } from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { PopoverClose } from "@radix-ui/react-popover";

const DEFAULT_SNIPING_DAY = [
  { value: "1_days_before", label: "1 days before" },
  { value: "2_days_before", label: "2 days before" },
];

interface IPartySize {
  value: string;
  label: string;
}
[];

const SelectFinalSnipingDaySection = () => {
  // const [newDay, setNewDay] = useState<string | undefined>();
  // const initialDays: Date[] = [];
  const [selectedDay, setSelectedDay] = useState<Date>();

  const {
    dispatch,
    reservationFormState: { finalSnipingDay, reservationDates },
  } = useReservationContext();

  const userDetail = useContext(UserDetailContext);

  const [snipingDayArray] = useState<Array<IPartySize>>(
    DEFAULT_SNIPING_DAY
  );



  const setTheSnipingDay = (buttonValue: string) => {
    if (reservationDates.length === 0) {
      return toast({
        description: "Please select Reservation Date First",
        variant: "dark",
      });
    } else {
      if (isToday(reservationDates[0])) {
        return toast({
          description: "Reservation Date is Today",
          variant: "dark",
        });
      } else if (isTommorrow(reservationDates[0])) {
        return toast({
          description: "Reservation Date is Tommorrow",
          variant: "dark",
        });
      }
      if (buttonValue === "1_days_before") {

        const oneDayBefore = getDayBefore(reservationDates[0], 1);
        return handleFinalSnipingDay(dispatch, {
          display: buttonValue,
          value: oneDayBefore,
        });
      } else if (buttonValue === "2_days_before") {
        console.log(isTommorrow(reservationDates[0]));


        const twoDayBefore = getDayBefore(reservationDates[0], 2);
        return handleFinalSnipingDay(dispatch, {
          display: buttonValue,
          value: twoDayBefore,
        });
      }

      // const reservationDate = new Date(reservationDates[0]);
      // const today = new Date();
      // today.setHours(0, 0, 0, 0);

      // if (reservationDate.getTime() === today.getTime()) {
      //   toast({ description: "Reservation Date is Today", variant: 'dark' });
      // } else {
      //   console.log(value);

      // const daysBefore = parseInt(value);
      // const calculatedDate = calculateFinalSnipingDate(daysBefore);
      // setNewDay(value)
      // handleFinalSnipingDay(dispatch, calculatedDate);
    }
    // }
  };

  // const calculateFinalSnipingDate = (daysBefore: number): string => {
  //   const currentDate = new Date(reservationDates[0]);
  //   currentDate.setDate(currentDate.getDate() - daysBefore);
  //   const formattedDate = currentDate.toISOString().split('T')[0];
  //   return formattedDate;
  // };



  const footer = selectedDay ? (
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
              const formatedDate = formatDate(selectedDay);
              handleFinalSnipingDay(dispatch, {
                display: "Custom",
                value: formatedDate,
              });

              // const formattedDates: string[] = days
              //   .sort((a: Date, b: Date) => a.getTime() - b.getTime()) // Sort the dates
              //   .map((date: Date) => formatDate(date)); // Format date

              // handleReservationDate(dispatch, formattedDates);

              // setReservationDates((prev) => {
              //   days.forEach((day) => {
              //     const check = prev.some((prev) => prev.value === day);
              //     if (!check) {
              //       prev.push({
              //         value: day,
              //         label: format(day, "PP"),
              //         type: "button",
              //       });
              //     }
              //   });
              //   return [...prev];
              // });
              // days.forEach((day) => {
              //   handleSelectedButton(day, false);
              // });
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

  const earliestReservationDate = getDayBefore(reservationDates[0], 1);



  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Final Sniping Day</p>
      <div className="flex gap-1 sm:gap-3 ">
        <Button
          variant={!finalSnipingDay.value ? "default" : "outline"}
          className="inline-flex"
          onClick={() => {
            handleFinalSnipingDay(dispatch, { display: "None", value: null });
          }}
        >
          None
        </Button>

        {userDetail.subscription_type === "standard" ? (
          <>
            {snipingDayArray.map((button, i) => (
              <Credenza key={i}>
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
            {snipingDayArray.map((button, i) => (
              <Button
                variant={
                  button?.value === finalSnipingDay.display
                    ? "default"
                    : "outline"
                }
                className="inline-flex"
                key={i}
                onClick={() => {
                  setTheSnipingDay(button.value);
                  // get earliest day from reservation dates
                  // if (button.value === "1_days_before") {
                  //   const onDayBefore = getPrevousDayBefore(reservationDates[0], 1)
                  //   handleFinalSnipingDay(dispatch, { display: button.value, value: onDayBefore })
                  // }
                }}
              >
                {button.label}
              </Button>
            ))}
            {finalSnipingDay.display === "Custom" && (
              <Button
                variant={"default"}
                className="inline-flex"
                onClick={() => {
                  // setTheSnipingDay(button.value);
                  // get earliest day from reservation dates
                  // if (button.value === "1_days_before") {
                  //   const onDayBefore = getPrevousDayBefore(reservationDates[0], 1)
                  //   handleFinalSnipingDay(dispatch, { display: button.value, value: onDayBefore })
                  // }
                }}
              >
                {finalSnipingDay.value}
              </Button>
            )}

            {/* {reservationDates.length === 0 && !getDayBefore(reservationDates[0], 3) && (
              <Button
                variant="outline"
                className=" text-light relative"
                onClick={() => {
                  if (reservationDates.length === 0) {
                    return toast({
                      description: "Please select Reservation Date First",
                      variant: "dark",
                    });
                  } else {
                    if (isToday(reservationDates[0])) {
                      return toast({
                        description: "Reservation Date is Today",
                        variant: "dark",
                      });
                    }
                  }
                }}
              >
                Custom
              </Button>
            )} */}

            {/* Custom option is only visible if reservation date 3  after from today */}
            {reservationDates.length !== 0 && !isToday(reservationDates[0]) && !isTommorrow(reservationDates[0]) && (
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
                    // onDayClick={(e) => {
                    // handleRemoveReservationDate(dispatch, formatDate(e).toString())
                    // setSelected((d) => {
                    //   const indexToRemove = d.findIndex(date => date.getDate() === e.getDate());
                    //   if (indexToRemove !== -1) {
                    //     d.splice(indexToRemove, 1)
                    //   }
                    //   return d
                    // })

                    // If the date is found, remove it from the array
                    // }}
                    id="test"
                    mode="single"
                    selected={selectedDay}
                    disabled={{
                      before: new Date(),
                      after: earliestReservationDate
                        ? new Date(earliestReservationDate)
                        : undefined,
                    }}
                    footer={footer}
                    onSelect={setSelectedDay}
                  />
                </PopoverContent>
              </Popover>
            )}
            {/* <Select disabled onValueChange={(e) => console.log(e)}> */}

            {/* </Select> */}
          </>
        )}
      </div>
    </div>
  );
};

export default SelectFinalSnipingDaySection;
