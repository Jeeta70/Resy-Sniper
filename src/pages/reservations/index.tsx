import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MyReservationTab, ReservationPageSkeleton } from "@/components";
import { useGetReservationCount, useGetUserReservations } from "@/features/reservation/reservation";
import { useContext, useEffect, useMemo, useState } from "react";
import { UserDetailContext } from "@/context/UserDetailProvider";
import WarningIcon from "@/assets/WarningCircle.svg"


const Index = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const { userReservations, isLoading, isSuccess } = useGetUserReservations();
  const { reservationCounts, isSuccess: countIsLoading } =
    useGetReservationCount();
  const { subscription_type } = useContext(UserDetailContext);


  const reservations = useMemo(() => {
    if (isSuccess) {
      if (userReservations && userReservations.data && userReservations.data.message === "no record found!") {
        return userReservations.data.message;
      } else if (userReservations) {
        return userReservations;
      }
    }
    return null;
  }, [isSuccess, userReservations]);


  useEffect(() => {
    if (countIsLoading && reservationCounts) {
      const count = reservationCounts?.data?.total_reservations;
      if (count >= 5 && subscription_type === 'standard') {
        setShow(true);
      }
      else if (count >= 25 && subscription_type === 'premium') {
        setShow(true);
      }
      else {
        setShow(false)
      }
    }
  }, [countIsLoading, reservationCounts, subscription_type]);



  return (
    <div className="w-full h-screen sm:px-10 px-3 py-1  mt-24 sm:mt-0 ">
      <div className="flex justify-end">
        {show && <div className="flex rounded-sm gap-2 items-center text-[red] mr-8">
          <img src={WarningIcon} className="h-3 w-3 text-[red]" alt="warning-icon" />
          <small className="font-semibold text-xs">Limit exceeded {reservationCounts?.data?.total_reservations}</small>
        </div>}
      </div>
      <div className="justify-between items-center sm:my-0 sm:mb-3 mb-auto my-8 sm:flex hidden">
        <div className=" font-bold sm:text-2xl text-xl ">My Reservations</div>
        <div>
          <Button
            variant="primary"
            className="inline-flex"
            onClick={() => navigate("/reservations/add-reservation")}
            disabled={show ?? false}
          >
            <Plus className="sm:mr-3 mr-0" /> Add Reservation
          </Button>
        </div>
      </div>
      {isLoading && <ReservationPageSkeleton />}
      {typeof reservations?.data !== "object" ? (
        <div className="flex flex-col justify-center items-center h-5/6  text-center text-[#12171A] gap-5 ">
          <img src="./Reservation.png" />
          <p>
            No reservations here yet. <br /> Click "Add Reservation" button to
            add me
          </p>
          <Button
            variant="primary"
            className="sm:hidden"
            onClick={() => navigate("/reservations/add-reservation")}
          >
            <Plus className="mr-3" /> Add Reservation
          </Button>
        </div>
      ) : (
        <MyReservationTab userReservations={reservations} isLoading={false} show={show} />
      )}
    </div>
  );
};

export default Index;
