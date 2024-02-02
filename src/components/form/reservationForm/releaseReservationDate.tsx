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
// import { X } from "lucide-react";
import { handleReleaseDate } from "@/reducer/reservationFormReducer";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { X } from "lucide-react";
// import { UserDetailContext } from "@/context/UserDetailProvider";

// import ProIcon from "@/assets/ProIcon.svg";
// import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";

const pastMonth = new Date();

const ReleaseReservationDateSection = () => {
  // const userDetail = useContext(UserDetailContext);
  const {
    dispatch,
    reservationFormState: {
      releaseDates,
      errors: { releaseDatesError },
    },
  } = useReservationContext();
  const initialDays: Date[] = [];
  const [days, setDays] = React.useState<Date[]>(initialDays);
  const [selected, setSelected] = React.useState<string>("");
  const handleCalendarSelect = (value: Date | undefined) => {
    if (value instanceof Date) {
      handleSelectedButton(value);
      setDays([value]);
    } else {
      setDays([]);
    }
  };

  // useEffect(() => {
  //     return handleReleaseDate(dispatch, selected);
  // }, [selected]);

  // const handleSelectedButton = (date: Date) => {
  //     setDays([date]);
  //     const formattedDate = format(date, "yyyy-MM-dd");
  //     setSelected(formattedDate);
  // }

  useEffect(() => {
    // Update the release date in the state when selectedDate changes
    // if (selected) {
    handleReleaseDate(dispatch, selected ? format(selected, "yyyy-MM-dd") : "");
    // }
  }, [dispatch, selected]);

  const handleSelectedButton = (date: Date | string) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    // Update the selected date when the calendar selection changes
    setSelected(formattedDate);
  };

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
                handleSelectedButton(days[0]);
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
      <p className="mb-2 font-semibold text-sm">Release Date</p>
      <div className="flex gap-3">
        <span
          className={cn(
            buttonVariants({
              variant: selected === releaseDates ? "default" : "outline",
            }),
            `inline-flex cursor-pointer ${releaseDates === "" ? "hidden" : ""}`
          )}
        >
          {releaseDates}{" "}
          {selected === releaseDates && (
            <X onClick={() => setSelected("")} size={15} />
          )}
        </span>
        {/* <span
                    onClick={() =>
                        handleSelectedButton(new Date(+new Date() + 86400000))
                    }
                    className={cn(
                        buttonVariants({
                            variant:
                                selected === format(new Date(+new Date() + 86400000), "PP")
                                    ? "default"
                                    : "outline",
                        }),
                        "inline-flex cursor-pointer"
                    )}
                >
                    Tomorrow {selected === format(new Date(+new Date() + 86400000), "PP") && <X size={15} />}
                </span> */}
        {/* {userDetail.subscription_type === "standard" ? (
                    <Credenza>
                        <CredenzaTrigger asChild>
                            <span
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "relative cursor-pointer"
                                )}
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
                id="test"
                mode="single"
                defaultMonth={pastMonth}
                selected={days ? days[0] : undefined}
                footer={footer}
                onSelect={handleCalendarSelect}
                onDayClick={(e) => {
                  const dateOnCaleder = format(e, "yyyy-MM-dd");
                  setSelected((prev) =>
                    dateOnCaleder === prev ? "" : dateOnCaleder
                  );
                }}
              />
            </PopoverContent>
          </Popover>
        </Select>
        {/* )} */}
      </div>

      {releaseDatesError && !releaseDates && (
        <ErrorMessage message="Please set release date" />
      )}
    </div>
  );
};

export default ReleaseReservationDateSection;
