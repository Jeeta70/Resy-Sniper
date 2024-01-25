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


const Index = () => {
  const { venue_id, group_id } = useParams();


 
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
      <SelectReservationTime />
      <SelectFinalSnipingDaySection />
      <OverideCurrentReservationToggleSection />
      <Separator className="my-4" />
      <ReserveButtonSection />
    </div>
    // </ReservationContextProvider>
  );
};

export default Index;
