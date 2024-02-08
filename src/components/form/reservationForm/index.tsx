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
import { useReservationContext } from "@/context/ReservationFomProvider";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { resetReservationForm } from "@/reducer/reservationFormReducer";



const Index = () => {
  const { group_id } = useParams();
  const { reservationFormState: initialState } = useReservationContext()


  const { dispatch } = useReservationContext();
  const navigate = useNavigate();

  return (
    // <ReservationContextProvider>
    <div className="w-full p-5 sm:p-10 flex flex-col gap-4">
      <div className="flex  justify-between">
        <h1 className=" font-bold text-2xl">
          {group_id ? "Edit" : "Add"} Reservation
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
      {initialState.reservationType === "cancel" ? <p className="text-light text-[11px]">
        If anyone cancels their reservation, Resy Sniper will book it for you instantly{" "}
      </p> :
        <p className="text-light text-[11px]">
          Resy Sniper will get a reservation for you as soon as it releases{" "}
        </p>}
      <AddResturantSection />
      <SelectPartSizeSection />
      <SelectReservationDateSection />
      <SelectReservationTime />
      {initialState.reservationType === "release" && <ReleaseReservationDateSection />}
      {initialState.reservationType === "release" && <ReleaseReservationTime />}
      {initialState.reservationType === "cancel" && <SelectFinalSnipingDaySection />}
      <OverideCurrentReservationToggleSection />
      <Separator className="my-4" />
      <ReserveButtonSection />
    </div>
    // </ReservationContextProvider>
  );
};

export default Index;
