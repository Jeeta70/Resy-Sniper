import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MyReservationTab, ReservationPageSkeleton } from "@/components";
import { useGetReservationCount, useGetUserReservations } from "@/features/reservation/reservation";
import { useContext, useEffect, useMemo, useState } from "react";
import { UserDetailContext } from "@/context/UserDetailProvider";

const Index = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const { userReservations, isLoading } = useGetUserReservations();
  const { reservationCounts, isSuccess: countIsLoading } =
    useGetReservationCount();
  const { subscription_type } = useContext(UserDetailContext);


  const reservations = useMemo(() => {
    if (!isLoading && userReservations) {
      return userReservations;
    }
  }, [isLoading, userReservations]);

  console.log(reservations)

  useEffect(() => {
    if (countIsLoading && reservationCounts && reservationCounts.data) {
      const count = reservationCounts?.data?.total_reservations;
      if (count >= 5 && subscription_type === 'standard') {
        setShow(true);
      }
      else if (count >= 25 && subscription_type === 'premium') {
        setShow(true);
      }

    }
  }, [countIsLoading, reservationCounts, subscription_type]);



  return (
    <div className="w-full h-screen sm:px-10 px-3 py-1">
      <div className="flex justify-between items-center sm:my-3 my-8">
        <h1 className=" font-bold sm:text-2xl text-xl">My Reservations</h1>
        <Button
          variant="primary"
          className="inline-flex"
          onClick={() => navigate("/reservations/add-reservation")}
          disabled={show}
        >
          <Plus className="sm:mr-3 mr-0" /> Add Reservation
        </Button>
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
            disabled={show}
          >
            <Plus className="mr-3" /> Add Reservation
          </Button>
        </div>
      ) : (
        <MyReservationTab userReservations={reservations} isLoading={false} />
      )}
    </div>
  );
};

export default Index;
