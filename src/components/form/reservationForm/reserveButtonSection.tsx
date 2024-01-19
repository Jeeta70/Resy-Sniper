import { useParams } from "react-router-dom";

import { ButtonLoader, DiscardChangesModal } from "@/components";
import { Button } from "@/components/ui/button";
import { useReservationContext } from "@/context/ReservationFomProvider";
import {
  setAllErrorFieldTrue,
} from "@/reducer/reservationFormReducer";
import { convertDateTimeFormt } from "@/utils/healper";
import { useCreateReservation } from "@/features/reservation/reservation";

const ReserveButtonSection = () => {
  const { reservationFormState, dispatch } = useReservationContext();
  const { createReservation, isLoading } = useCreateReservation();
  const { venue_id, group_id } = useParams();

  function handleReseveAndUpdateButtonClick(
    buttonClickType: "update" | "reserve"
  ): void {
    setAllErrorFieldTrue(dispatch);
    if (buttonClickType === "reserve") {
      const {
        resturantOptionOnAddReservationPage: {
          selectedResturantsForReservationOnAddReservationPage,
        },
        partySize,
        reservationDates,
      } = reservationFormState;
      if (
        !selectedResturantsForReservationOnAddReservationPage.length ||
        !partySize ||
        !reservationDates.length
      ) {
        return console.log("invalid");
      } else {
        const {
          partySize,
          reservationDates,
          resturantOptionOnAddReservationPage: {
            selectedResturantsForReservationOnAddReservationPage,
          },
          overideCurrentReservationToggleSection,
        } = reservationFormState;

        // coverted states into formated payload
        const payload = {
          resturants: selectedResturantsForReservationOnAddReservationPage.map(
            (venue) => {
              return { venue_id: venue.venue_id, venue_name: venue.venue_name };
            }
          ),
          date: reservationDates.map((date) => convertDateTimeFormt(date)),
          override_reservations: overideCurrentReservationToggleSection ? 1 : 0,
          final_snipe_date: null,
          final_snipe_time: null,
          table_type: null,
          reservation_source: "resy",
          snipe_type: "cancel",
          start_time: "15:00:00",
          end_time: "18:00:00",
          party_size: partySize,
        };
        createReservation(payload);
      }
    } else if (buttonClickType === "update") {
      const {
        partySize,
        reservationDates,
        resturantOptionOnAddReservationPage: {
          selectedResturantsForReservationOnAddReservationPage,
        },
        overideCurrentReservationToggleSection,
      } = reservationFormState;
      const payload = {
        group_id: "",
        resturants: selectedResturantsForReservationOnAddReservationPage.map(
          (venue) => {
            return { venue_id: venue.venue_id, venue_name: venue.venue_name };
          }
        ),
        date: reservationDates.map((date) => convertDateTimeFormt(date)),
        override_reservations: overideCurrentReservationToggleSection ? 1 : 0,
        final_snipe_date: null,
        final_snipe_time: null,
        table_type: null,
        reservation_source: "resy",
        snipe_type: "cancel",
        start_time: "15:00:00",
        end_time: "18:00:00",
        party_size: partySize,
      };
      createReservation(payload);
    }
  }

  return (
    <div className="flex justify-between flex-col-reverse sm:flex-row gap-2 text-center">
      <p className="text-xs font-semibold ">
        2 of 25 reservation requests used
      </p>
      <div className="flex gap-5">
        <DiscardChangesModal>
          <Button variant="outline">Cancel</Button>
        </DiscardChangesModal>

        {venue_id && group_id ? (
          <Button
            variant="primary"
            onClick={() => handleReseveAndUpdateButtonClick("update")}
          >
            Update
          </Button>
        ) : (
          <Button
            disabled={isLoading}
            variant="primary"
            onClick={() => handleReseveAndUpdateButtonClick("reserve")}
          >
            {isLoading ? <ButtonLoader /> : "Reserve"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ReserveButtonSection;
