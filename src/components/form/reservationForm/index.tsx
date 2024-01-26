import { Separator } from "@/components/ui/separator";
import SelectReservationTypeSection from "./selectReservationTypeSection";
import AddResturantSection from "./addResturantSection";
import SelectPartSizeSection from "./selectPartTypeSection";
import SelectReservationDateSection from "./selectReservationDate";
import SelectReservationTime from "./selectReservationTime";
import SelectFinalSnipingDaySection from "./selectFinalSnipingDaySection";
import OverideCurrentReservationToggleSection from "./overideCurrentReservationToggleSection";
import ReserveButtonSection from "./reserveButtonSection";
import ReleaseReservationDateSection from "./releaseReservationDate";
import ReleaseReservationTime from "./releaseReservationTime";
// import { useContext } from "react";
// import { UserDetailContext } from "@/context/UserDetailProvider";
// import { initialState } from "@/reducer/reservationFormReducer";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { resetReservationForm } from "@/reducer/reservationFormReducer";



const Index = () => {
  const { venue_id, group_id } = useParams();
  const { reservationFormState: initialState } = useReservationContext()
  const { dispatch } = useReservationContext();
  const navigate = useNavigate();

  return (
    // <ReservationContextProvider>
    <div className="w-full p-5 sm:p-10 flex flex-col gap-4">
      <div className="flex  justify-between">
        <h1 className=" font-bold text-2xl">
          {venue_id && group_id ? "Edit" : "Add"} Reservation
        </h1>

        <X
          className=" cursor-pointer"
          onClick={() => {
            resetReservationForm(dispatch);
            navigate("/reservations");
          }}
        />
      </div>
      <SelectReservationTypeSection />
      <p className="text-light text-[11px]">
        Reasy Sniper will look for Canceled reservation and book it for you{" "}
      </p>
      <AddResturantSection />
      <SelectPartSizeSection />
      <SelectReservationDateSection />
      {initialState.reservationType === "release" && <ReleaseReservationDateSection />}
      <SelectReservationTime />
      {initialState.reservationType === "release" && <ReleaseReservationTime />}
      <SelectFinalSnipingDaySection />
      <OverideCurrentReservationToggleSection />
      <Separator className="my-4" />
      <ReserveButtonSection />
    </div>
    // </ReservationContextProvider>
  );
};

export default Index;
