import React, { useContext, useEffect } from "react";
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
import { ErrorMessage, FeatureIsForProModel } from "@/components";
import { X } from "lucide-react";
import { handleReleaseDate } from "@/reducer/reservationFormReducer";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { UserDetailContext } from "@/context/UserDetailProvider";

import ProIcon from "@/assets/ProIcon.svg";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";

const pastMonth = new Date(2020, 10, 15);

const ReleaseReservationDateSection = () => {
    const userDetail = useContext(UserDetailContext);
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
            // value is a single selected date
            handleSelectedButton(value);
            setDays([value]); // Update selected to hold a single date
        } else {
            // value is undefined, indicating deselection
            // Handle deselection logic if needed
            setDays([]); // Update selected to an empty array for deselection
        }
    };




    useEffect(() => {
        return handleReleaseDate(dispatch, selected);
    }, [selected]);

    const handleSelectedButton = (date: Date) => {
        setDays([date]);
        setSelected(format(date, "PP"));


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
                    onClick={() => handleSelectedButton(new Date())}
                    className={cn(
                        buttonVariants({
                            variant: selected === format(new Date(), "PP") ? "default" : "outline",
                        }),
                        "inline-flex cursor-pointer"
                    )}
                >
                    Today {selected === format(new Date(), "PP") && <X size={15} />}
                </span>
                <span
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
                </span>
                {userDetail.subscription_type === "standard" ? (
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
                ) : (
                    <Select
                        disabled
                        onValueChange={(e) => console.log(e)}
                    >
                        <Popover>
                            <PopoverTrigger
                                asChild
                                disabled={userDetail.subscription_type === "standard"}
                            >
                                <Button
                                    variant="outline"
                                    className=" text-light relative"
                                >
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
                                />
                            </PopoverContent>
                        </Popover>
                    </Select>
                )}
            </div>

            {releaseDatesError && !releaseDates && (
                <ErrorMessage message="Please set release date" />
            )}
        </div>
    );
};

export default ReleaseReservationDateSection;
