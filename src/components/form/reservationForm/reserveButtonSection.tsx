import { useParams } from "react-router-dom";

import { ButtonLoader, DiscardChangesModal } from "@/components";
import { Button } from "@/components/ui/button";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { setAllErrorFieldTrue } from "@/reducer/reservationFormReducer";
import { convertDateTimeFormt } from "@/utils/healper";
import {
  useCreateReservation,
  useGetReservationCount,
  useUpdateReservation,
} from "@/features/reservation/reservation";
import { useContext, useEffect, useMemo } from "react";

import { handleUpdateReservation } from "@/reducer/reservationFormReducer";
import { useGetSingleReservation } from "@/features/reservation/reservation";
import { UserDetailContext } from "@/context/UserDetailProvider";
// import { IReservation } from "@/types/reservations";

const ReserveButtonSection = () => {
  const { reservationCounts, isLoading: countIsLoading } =
    useGetReservationCount();

  const {
    reservationFormState,
    reservationFormState: { reservationType },
    dispatch,
  } = useReservationContext();
  // const { reservationCounts } = useGetReservationCount()
  const { createReservation, isLoading } = useCreateReservation();
  const { updateReservation } = useUpdateReservation();
  const { group_id } = useParams();
  const { singleReservation, isLoading: singleResevationIsLoading } = useGetSingleReservation();
  const { subscription_type } = useContext(UserDetailContext);
  console.log(reservationFormState);

  const resCount = useMemo(() => {
    if (!countIsLoading && reservationCounts) {
      return reservationCounts.data.total_reservations;
    }
    return 0;
  }, [countIsLoading, reservationCounts]);

  const initialSittingState = {
    showModel: false,
    title: "Add Resturant",
    restaurantDetail: { cover_image_url: "", price: 0, venue_name: "" },
    availableSittings: "indoor",
  };
  const state = {
    reservationType: "cancel",
    resturantOptionOnAddReservationPage: {
      selectedResturant: "",
      selectedResturantsForReservationOnAddReservationPage: [],
    },
    selectSittingOptions: { ...initialSittingState },
    partySize: 0,
    reservationDates: [] as string[],
    reservationTime: "",
    finalSnipingDay: "any",
    overideCurrentReservationToggleSection: false,
    title: "",
    description: "",
    errors: {
      resturantsError: false,
      partySizeError: false,
      reservationDateError: false,
      reservationTimeError: false,
    },
  };

  useEffect(() => {
    // This useffect is for update reservations

    if (!singleResevationIsLoading && singleReservation && group_id) {
      const { data } = singleReservation;
      console.log(data);

      const formattedStartTime = convertTo12HourFormat(data[0].start_time);
      const formattedEndTime = convertTo12HourFormat(data[0].end_time);
      const reservationTimeNew = `${formattedStartTime} - ${formattedEndTime}`;
      state.partySize = data[0].party_size;
      state.reservationTime = reservationTimeNew;
      const dateString = data[0].date;

      // const dateObject = new Date(dateString);
      // const formattedDate = dateObject.toISOString().split("T")[0];
      const dateArray = [dateString];
      const transformedDates = dateArray.map(inputDate => {
        const dateObject = new Date(inputDate);
        const transformedDate = dateObject.toString();

        return transformedDate;
      });
      state.reservationDates = transformedDates;
      const res = data[0]?.venue_data as never;
      state.resturantOptionOnAddReservationPage.selectedResturantsForReservationOnAddReservationPage = [res];
      state.finalSnipingDay = data[0]?.final_snipe_date === null ? 'none' : data[0]?.final_snipe_date;
      state.overideCurrentReservationToggleSection = data[0].override_reservations ? true : false;

      // data.forEach((data: IReservation) => {
      //   const date = convertDateFormat(data.date)
      //   console.log(date);

      //   state.reservationDates.push(date);
      // })
      handleUpdateReservation(dispatch, state);
    }
  }, [
    singleReservation,
    singleResevationIsLoading,
    dispatch,
    group_id,
  ]);

  const convertTo12HourFormat = (timeString: string) => {
    const [hours, minutes] = timeString.split(":");
    let formattedHours = parseInt(hours, 10);
    let period = "AM";

    if (formattedHours > 12) {
      formattedHours -= 12;
      period = "PM";
    } else if (formattedHours === 12) {
      period = "PM";
    } else if (formattedHours === 0) {
      formattedHours = 12;
    }

    const formattedMinutes = minutes.padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  function handleReseveAndUpdateButtonClick(
    buttonClickType: "update" | "reserve"
  ): void {
    setAllErrorFieldTrue(dispatch);

    if (buttonClickType === "reserve") {
      if (reservationType === "cancel") {
        const {
          reservationType,
          resturantOptionOnAddReservationPage: {
            selectedResturantsForReservationOnAddReservationPage,
          },
          partySize,
          reservationDates,
          reservationTime,
        } = reservationFormState;
        if (
          !selectedResturantsForReservationOnAddReservationPage.length ||
          !partySize ||
          !reservationDates.length ||
          !reservationTime ||
          !reservationType
        ) {
          return console.log("invalid");
        } else {
          const {
            reservationType,
            partySize,
            reservationDates,
            reservationTime,
            resturantOptionOnAddReservationPage: {
              selectedResturantsForReservationOnAddReservationPage,
            },
            overideCurrentReservationToggleSection,
          } = reservationFormState;
          const newTime = reservationTime.split("-")
          const convertTo24HourFormat = (timeString: string) => {
            const [time, period] = timeString.split(" ");
            const [hours, minutes] = time.split(":");
            let hours24 = parseInt(hours, 10);

            if (period === "PM" && hours !== "12") {
              hours24 += 12;
            }
            const formattedHours = String(hours24).padStart(2, '0');
            const formattedMinutes = minutes ? minutes.padStart(2, '0') : '00';

            return `${formattedHours}:${formattedMinutes}:00`;
          };

          // Convert both from and to times to 24-hour format
          const fromTime24HourFormat = convertTo24HourFormat(newTime[0]);
          const toTime24HourFormat = convertTo24HourFormat(newTime[1]);

          // Create the reservation time string
          const reservationTimeNew = `${fromTime24HourFormat} - ${toTime24HourFormat}`;

          const splitTime = reservationTimeNew.split(" - ");
          // coverted states into formated payload
          const payload = {
            resturants:
              selectedResturantsForReservationOnAddReservationPage.map(
                (venue) => {
                  return {
                    venue_id: venue.venue_id,
                    venue_name: venue.venue_name,
                  };
                }
              ),
            date: reservationDates.map((date) => convertDateTimeFormt(date)),
            override_reservations: overideCurrentReservationToggleSection
              ? 1
              : 0,
            final_snipe_date: null,
            final_snipe_time: null,
            table_type: null,
            reservation_source: "resy",
            snipe_type: reservationType as string,
            start_time: splitTime[0],
            end_time: splitTime[1],
            party_size: partySize,
          };
          createReservation(payload);
        }
      } else if (reservationType === "release") {
        const {
          reservationType,
          resturantOptionOnAddReservationPage: {
            selectedResturantsForReservationOnAddReservationPage,
          },
          partySize,
          reservationDates,
          releaseDates,
          reservationTime,
          releaseTime,
        } = reservationFormState;
        if (
          !selectedResturantsForReservationOnAddReservationPage.length ||
          !partySize ||
          !reservationDates.length ||
          !releaseDates.length ||
          !reservationTime ||
          !reservationType ||
          !releaseTime
        ) {
          return console.log("invalid");
        } else {
          const {
            reservationType,
            partySize,
            reservationDates,
            releaseDates,
            reservationTime,
            releaseTime,
            resturantOptionOnAddReservationPage: {
              selectedResturantsForReservationOnAddReservationPage,
            },
            overideCurrentReservationToggleSection,
          } = reservationFormState;
          const newTime = reservationTime.split("-")
          const convertTo24HourFormat = (timeString: string) => {
            const [time, period] = timeString.split(" ");
            const [hours, minutes] = time.split(":");
            let hours24 = parseInt(hours, 10);

            if (period === "PM" && hours !== "12") {
              hours24 += 12;
            }
            const formattedHours = String(hours24).padStart(2, '0');
            const formattedMinutes = minutes ? minutes.padStart(2, '0') : '00';

            return `${formattedHours}:${formattedMinutes}:00`;
          };

          // Convert both from and to times to 24-hour format
          const fromTime24HourFormat = convertTo24HourFormat(newTime[0]);
          const toTime24HourFormat = convertTo24HourFormat(newTime[1]);
          const fromTime24HourFormatNew = convertTo24HourFormat(releaseTime);
          // const toTime24HourFormatNew = convertTo24HourFormat(newTime[1]);

          // Create the reservation time string
          const reservationTimeNew = `${fromTime24HourFormat} - ${toTime24HourFormat}`;

          const splitTime = reservationTimeNew.split(" - ");

          // const newSplitTime = releaseTime.split(" - ");
          // coverted states into formated payload
          const payload = {
            resturants:
              selectedResturantsForReservationOnAddReservationPage.map(
                (venue) => {
                  return {
                    venue_id: venue.venue_id,
                    venue_name: venue.venue_name,
                  };
                }
              ),
            date: reservationDates.map((date) => convertDateTimeFormt(date)),
            release_date: releaseDates,
            override_reservations: overideCurrentReservationToggleSection
              ? 1
              : 0,
            final_snipe_date: null,
            final_snipe_time: null,
            table_type: null,
            reservation_source: "resy",
            snipe_type: reservationType as string,
            start_time: splitTime[0],
            end_time: splitTime[1],
            release_start_time: fromTime24HourFormatNew,
            // release_end_time: newSplitTime[1],
            party_size: partySize,
          };
          createReservation(payload);
        }
      }
    } else if (buttonClickType === "update") {
      if (reservationType === "cancel") {
        const {
          reservationType,
          partySize,
          reservationDates,
          releaseDates,
          reservationTime,
          releaseTime,
          resturantOptionOnAddReservationPage: {
            selectedResturantsForReservationOnAddReservationPage,
          },
          overideCurrentReservationToggleSection,
        } = reservationFormState;
        const splitTime = reservationTime.split(" - ");
        const newSplitTime = releaseTime.split(" - ");
        const payload = {
          group_id,
          resturants: selectedResturantsForReservationOnAddReservationPage.map(
            (venue) => {
              return { venue_id: venue.venue_id, venue_name: venue.venue_name };
            }
          ),
          date: reservationDates.map((date) => convertDateTimeFormt(date)),
          release_date: releaseDates,
          override_reservations: overideCurrentReservationToggleSection ? 1 : 0,
          final_snipe_date: null,
          final_snipe_time: null,
          table_type: null,
          reservation_source: "resy",
          snipe_type: reservationType as string,
          start_time: splitTime[0],
          end_time: splitTime[1],
          release_start_time: newSplitTime[0],
          release_end_time: newSplitTime[1],
          party_size: partySize,
        };
        updateReservation(payload);
      }
    } else if (reservationType === "release") {
      const {
        reservationType,
        partySize,
        reservationDates,
        releaseDates,
        reservationTime,
        releaseTime,
        resturantOptionOnAddReservationPage: {
          selectedResturantsForReservationOnAddReservationPage,
        },
        overideCurrentReservationToggleSection,
      } = reservationFormState;
      const splitTime = reservationTime.split(" - ");
      const newSplitTime = releaseTime.split(" - ");
      const payload = {
        group_id,
        resturants: selectedResturantsForReservationOnAddReservationPage.map(
          (venue) => {
            return { venue_id: venue.venue_id, venue_name: venue.venue_name };
          }
        ),
        date: reservationDates.map((date) => convertDateTimeFormt(date)),
        release_date: releaseDates,
        override_reservations: overideCurrentReservationToggleSection ? 1 : 0,
        final_snipe_date: null,
        final_snipe_time: null,
        table_type: null,
        reservation_source: "resy",
        snipe_type: reservationType as string,
        start_time: splitTime[0],
        end_time: splitTime[1],
        release_start_time: newSplitTime[0],
        release_end_time: newSplitTime[1],
        party_size: partySize,
      };
      updateReservation(payload);
    }
  }

  return (
    <div className="flex justify-between flex-col-reverse sm:flex-row gap-2 text-center">
      {subscription_type === "standard" && resCount > 5 ? (
        <p className="text-xs font-semibold text-red-400">
          {resCount} of 5 reservation requests used
        </p>
      ) : (
        subscription_type === "standard" && (
          <p className="text-xs font-semibold ">
            {resCount} of 5 reservation requests used
          </p>
        )
      )}

      {subscription_type === "premium" && resCount > 25 ? (
        <p className="text-xs font-semibold text-red-400">
          {resCount} of 25 reservation requests used
        </p>
      ) : (
        subscription_type === "premium" && (
          <p className="text-xs font-semibold ">
            {resCount} of 25 reservation requests used
          </p>
        )
      )}
      {/* <p className="text-xs font-semibold ">
        {resCount} of 25 reservation requests used
      </p> */}
      <div className="flex gap-5">
        <DiscardChangesModal>
          <Button variant="outline" className="sm:block hidden">
            Cancel
          </Button>
        </DiscardChangesModal>

        {group_id ? (
          <Button
            variant="primary"
            className="sm:block hidden"
            onClick={() => handleReseveAndUpdateButtonClick("update")}
          >
            Update
          </Button>
        ) : (
          <Button
            disabled={isLoading}
            variant="primary"
            className="sm:w-auto w-[100%]"
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
