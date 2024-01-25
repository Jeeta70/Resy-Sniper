import { Separator } from "@/components/ui/separator";
import SelectReservationTypeSection from "./selectReservationTypeSection";
import AddResturantSection from "./addResturantSection";
import SelectPartSizeSection from "./selectPartTypeSection";
import SelectReservationDateSection from "./selectReservationDate";
import SelectReservationTime from "./selectReservationTime";
import SelectFinalSnipingDaySection from "./selectFinalSnipingDaySection";
import OverideCurrentReservationToggleSection from "./overideCurrentReservationToggleSection";
import ReserveButtonSection from "./reserveButtonSection";
import { useParams } from "react-router-dom";
import ReleaseReservationDateSection from "./releaseReservationDate";
import ReleaseReservationTime from "./releaseReservationTime";
// import { useContext } from "react";
// import { UserDetailContext } from "@/context/UserDetailProvider";
// import { initialState } from "@/reducer/reservationFormReducer";
import { useReservationContext } from "@/context/ReservationFomProvider";


const Index = () => {
  const { venue_id, group_id } = useParams();
  // const reservationDetails = useContext(initialState);
  const { reservationFormState: initialState } = useReservationContext()


  return (
    // <ReservationContextProvider>
    <div className="w-full p-5 sm:p-10 flex flex-col gap-4">
      <h1 className=" font-bold text-2xl">
        {venue_id && group_id ? "Edit" : "Add"} Reservation
      </h1>
      <SelectReservationTypeSection />
      <p className="text-light text-[11px]">
        {" "}
        Reasy Sniper will look for Canceled reservation and book it for you{" "}
      </p>
      <AddResturantSection />
      <SelectPartSizeSection />
      <SelectReservationDateSection />
      {initialState.reservationType === "releaseReservation" && <ReleaseReservationDateSection />}
      <SelectReservationTime />
      {initialState.reservationType === "releaseReservation" && <ReleaseReservationTime />}
      <SelectFinalSnipingDaySection />
      <OverideCurrentReservationToggleSection />
      <Separator className="my-4" />
      <ReserveButtonSection />
    </div>
    // </ReservationContextProvider>
  );
};

export default Index;
