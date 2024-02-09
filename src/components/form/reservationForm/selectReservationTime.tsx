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
import { AddTimeModal, AddTimeModalMobile, ErrorMessage, FeatureIsForProModel } from '@/components';
import { UserDetailContext } from '@/context/UserDetailProvider';
import { Credenza, CredenzaTrigger } from '@/components/ui/credenza';
import { cn } from '@/lib/utils';
import { useReservationContext } from '@/context/ReservationFomProvider';
import { handleReseverationTime } from '@/reducer/reservationFormReducer';
import { X } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
// import { ErrorMessage } from '@/components';

const SelectReservationTime = () => {
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
  const { dispatch, reservationFormState: { reservationTime, errors: { reservationTimeError } } } = useReservationContext()

  const timeOptions = [
    { label: "Early", value: "5:00 PM-6:30 PM" },
    { label: "Prime", value: "6:30 PM-8:30 PM" },
    { label: "Late", value: "8:30 PM-10:30 PM" },
  ];


  useEffect(() => {
    if (selected !== null) {
      handleReseverationTime(dispatch, selected);
    }
  }, [selected, dispatch]);

  const handleSelectedTime = (time: any) => {
    setSelected((prev) => (prev === time ? '' : time));
  };

  const handleSelectedTimeNew = () => {
    const reservationTime = "";
    setSelected("")
    handleReseverationTime(dispatch, reservationTime);
  }

  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Reservation Time</p>
      <div className="flex gap-3 flex-wrap">
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
              variant: reservationTime === '' || reservationTime === null ? "default" : "outline",
            }),
            `inline-flex text-black ${reservationTime === '' || reservationTime === null ? "hidden" : 'bg-black text-white hover:bg-black hover:text-white'}`
          )}
          onClick={() => handleSelectedTimeNew()}
        >
          {reservationTime} {<X size={15} className='ml-1' />}
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
          <>
            <div className='sm:block hidden'>
              <Popover>
                <PopoverTrigger asChild>
                  <Button id='reservationTimeCustomButton' variant="outline" className=" text-light ">
                    Custom
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <AddTimeModal />
                </PopoverContent>
              </Popover>
            </div>
            <div className='block sm:hidden'>
              <Drawer>
                <DrawerTrigger>
                  <Button id='reservationTimeCustomButton' variant="outline" className=" text-light ">
                    Custom
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="w-auto p-0" >
                  <DrawerHeader className="flex justify-between">
                    <DrawerTitle className="font-bold text-2xl text-start">
                      Reservation Time
                    </DrawerTitle>
                    <DrawerClose>
                      <X />
                    </DrawerClose>
                  </DrawerHeader>
                  <AddTimeModalMobile />
                </DrawerContent>
              </Drawer>
            </div>
          </>
        }
      </div>
      {reservationTimeError && !reservationTime && <ErrorMessage message="Please set reservation time" />}
      {/* <ErrorMessage message='Please set reservation time' /> */}
    </div>
  );
}

export default SelectReservationTime