import { Separator } from "@/components/ui/separator";
import SelectReservationTypeSection from "./selectReservationTypeSection";
import AddResturantSection from "./addResturantSection";
import SelectPartTypeSection from "./selectPartTypeSection";
import SelectReservationDateSection from "./selectReservationDate";
import SelectReservationTime from "./selectReservationTime";
import SelectFinalSnipingDaySection from "./selectFinalSnipingDaySection";
import OverideCurrentReservationToggleSection from "./overideCurrentReservationToggleSection";
import ReserveButtonSection from "./reserveButtonSection";

const Index = () => {
  return (
    <div className="h-screen w-full p-10 flex flex-col gap-4 ">
      <h1 className=" font-bold text-2xl">Add Reservation</h1>
      <SelectReservationTypeSection />
      <p className="text-light text-[11px]">
        Reasy Sniper will look for Canceled reservation and book it for you
      </p>
      <AddResturantSection />
      <SelectPartTypeSection />
      <SelectReservationDateSection />
      <SelectReservationTime />
      <SelectFinalSnipingDaySection />
      <OverideCurrentReservationToggleSection />
      <Separator className="my-4" />
      <ReserveButtonSection />
    </div>
  );
};

export default Index;
