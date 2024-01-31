import React, { useContext, useEffect } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import ProIcon from "@/assets/ProIcon.svg";
import { Button, buttonVariants } from '@/components/ui/button';
// import { Calendar } from '@/components/ui/calendar';
// import { DateRange } from 'react-day-picker';
// import { addDays, format } from 'date-fns';
// import { PopoverClose } from '@radix-ui/react-popover';
// import { Separator } from '@/components/ui/separator';
import { ErrorMessage, FeatureIsForProModel, ReleaseTimeModal } from '@/components';
import { UserDetailContext } from '@/context/UserDetailProvider';
import { Credenza, CredenzaTrigger } from '@/components/ui/credenza';
import { cn } from '@/lib/utils';
import { useReservationContext } from '@/context/ReservationFomProvider';
import { handleReleaseTime } from '@/reducer/reservationFormReducer';
import { X } from 'lucide-react';
// import { ErrorMessage } from '@/components';

const ReleaseReservationTime = () => {
    const userDetail = useContext(UserDetailContext);
    // const pastMonth = new Date(2020, 10, 15);
    // const defaultSelected: DateRange = {
    //   from: pastMonth,
    //   to: addDays(pastMonth, 4),
    // };


    // const [range, setRange] = React.useState<DateRange | undefined>(defaultSelected);


    // let footer = <p>Please pick the first day.</p>;
    // if (range?.from) {
    //   if (!range.to) {
    //     footer = <p>{format(range.from, "PPP")}</p>;
    //   } else if (range.to) {
    //     footer = (
    //       <>

    //         <Separator className='mt-3' />
    //         <p className="flex justify-end mt-4">
    //           <PopoverClose className=''>
    //             <Button variant="outline" className="" >
    //               Cancel
    //             </Button>
    //           </PopoverClose>
    //           <Button variant="default" className=" ml-2 w-2/6">
    //             Confirm
    //           </Button>
    //         </p></>
    //     );
    //   }
    // }

    const [selected, setSelected] = React.useState<string | null>(null);
    const { dispatch, reservationFormState: { releaseTime, errors: { releaseTimeError } } } = useReservationContext()

    const timeOptions = [
        { label: "Early", value: "5:00 PM - 6:30 PM" },
        { label: "Prime", value: "6:30 PM - 8:30 PM" },
        { label: "Late", value: "8:30 PM - 10:30 PM" },
    ];


    useEffect(() => {
        if (selected !== null) {
            const newTime = selected.split("-")
            handleReleaseTime(dispatch, newTime[0]);
        }
    }, [selected, dispatch]);

    const handleSelectedTime = (time: string) => {
        setSelected((prev) => (prev === time ? null : time));
    };

    return (
        <div>
            <p className="mb-2 font-semibold text-sm">Release Time</p>
            <div className="flex gap-3">
                {timeOptions.map((option) => (
                    <Button
                        key={option.label}
                        className={cn(
                            buttonVariants({
                                variant: selected === option.value ? "default" : "outline",
                            }),
                            `inline-flex text-black ${selected === option.value ? 'bg-black text-white' : ''}`
                        )}
                        onClick={() => handleSelectedTime(option.value)}
                    >
                        {option.label} {selected === option.value && <X size={15} className='ml-1' />}
                    </Button>
                ))}
                <Button
                    className={cn(
                        buttonVariants({
                            variant: releaseTime === '' ? "default" : "outline",
                        }),
                        `inline-flex text-black ${releaseTime === '' ? "hidden" : 'bg-black text-white hover:bg-black hover:text-white'}`
                    )}
                    onClick={() => handleSelectedTime('')}
                >
                    {releaseTime} {<X size={15} className='ml-1' />}
                </Button>
                {userDetail.subscription_type === "standard" ?
                    <>
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
                    </>
                    :
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className=" text-light ">
                                Custom
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            {/* <AddTimeModal /> */}
                            <ReleaseTimeModal />
                            {/* <Calendar
              id="test"
              mode="range"
              defaultMonth={pastMonth}
              selected={range}
              footer={footer}
              onSelect={setRange}
            /> */}
                        </PopoverContent>
                    </Popover>}
            </div>
            {releaseTimeError && !releaseTime && <ErrorMessage message="Please set release time" />}
            {/* <ErrorMessage message='Please set reservation time' /> */}
        </div>
    );
}

export default ReleaseReservationTime