import { Separator } from "@/components/ui/separator";
import SelectReservationTypeSection from "./selectReservationTypeSection";
import AddResturantSection from "./addResturantSection";
import SelectPartSizeSection from "./selectPartTypeSection";
import SelectReservationDateSection from "./selectReservationDate";
import SelectReservationTime from "./selectReservationTime";
import SelectFinalSnipingDaySection from "./selectFinalSnipingDaySection";
import OverideCurrentReservationToggleSection from "./overideCurrentReservationToggleSection";
import ReserveButtonSection from "./reserveButtonSection";
import {
  useReservationContext,
} from "@/context/ReservationFomProvider";
import { useParams } from "react-router-dom";
import { useGetSingleReservation } from "@/features/reservation/reservation";
import { useEffect } from "react";
import { updateReservation } from "@/reducer/reservationFormReducer";

const Index = () => {
  const { venue_id, group_id } = useParams();
  const { dispatch } = useReservationContext();
  const { singleReservation, isLoading } = useGetSingleReservation();

  useEffect(() => {
    if (!isLoading && singleReservation) {
      // const singleREs = {
      //   completed: 1,
      //   created_date: "Fri, 05 Jan 2024 00:00:00 GMT",
      //   date: "Thu, 18 Jan 2024 00:00:00 GMT",
      //   end_time: "22:36:00",
      //   final_snipe_date: null,
      //   final_snipe_time: null,
      //   group_id: "6eb1fc97-45de-45cc-acbf-1238a666666d",
      //   id: 42,
      //   override_reservations: 0,
      //   party_size: 2,
      //   paused: 0,
      //   release_date: null,
      //   release_time: null,
      //   reservation_source: "resy",
      //   restaurant_name: "Faccia a Faccia",
      //   snipe_type: "cancel",
      //   start_time: "10:36:00",
      //   success: 1,
      //   table_type: "[]",
      //   user_id: 17,
      // };

      const initialSittingState = {
        showModel: false,
        title: "Add Resturant",
        restaurantDetail: { cover_image_url: "", price: 0, venue_name: "" },
        availableSittings: "indoor",
      };
      const state = {
        reservationType: "cancelReservation",
        resturantOptionOnAddReservationPage: {
          selectedResturant: "",
          selectedResturantsForReservationOnAddReservationPage: [],
        },
        selectSittingOptions: { ...initialSittingState },
        partySize: 0,
        reservationDates: [],
        finalSnipingDay: "any",
        overideCurrentReservationToggleSection: true,
        title: "",
        description: "",
        errors: {
          resturantsError: false,
          partySizeError: false,
          reservationDateError: false,
        },
      };

      updateReservation(dispatch, state);
    }
  }, [singleReservation, isLoading, dispatch]);
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
