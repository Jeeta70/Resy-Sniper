import { useParams } from "react-router-dom";

import { ButtonLoader, DiscardChangesModal } from "@/components";
import { Button } from "@/components/ui/button";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { setAllErrorFieldTrue } from "@/reducer/reservationFormReducer";
import {
  // convertDateTimeFormt,
  formatDateForSnipingDate,
  formateDateFromSingleReservation,
} from "@/utils/healper";
import {
  useCreateReservation,
  useGetReservationCount,
  useUpdateReservation,
} from "@/features/reservation/reservation";
import { Key, useContext, useEffect, useMemo } from "react";

import { handleUpdateReservation } from "@/reducer/reservationFormReducer";
import { useGetSingleReservation } from "@/features/reservation/reservation";
import { UserDetailContext } from "@/context/UserDetailProvider";
import { cn } from "@/lib/utils";
// import { IReservation } from "@/types/reservations";

const ReserveButtonSection = () => {
  const { reservationCounts, isLoading: countIsLoading } = useGetReservationCount();
  const { reservationFormState, reservationFormState: { reservationDates, resturantOptionOnAddReservationPage: { selectedResturantsForReservationOnAddReservationPage } }, reservationFormState: { reservationType, finalSnipingDay }, dispatch, } = useReservationContext();
  // const { reservationCounts } = useGetReservationCount()
  const { createReservation, isLoading } = useCreateReservation();
  const { updateReservation, isLoading: updateIsLoading } = useUpdateReservation();
  const { group_id } = useParams();
  const { singleReservation, isLoading: singleResevationIsLoading } = useGetSingleReservation();


  const { subscription_type } = useContext(UserDetailContext);

  let resevationCountInfo: { buttonDisable: boolean, totalResevations: number, error: boolean } = {
    buttonDisable: false,
    totalResevations: 0,
    error: false
  }

  resevationCountInfo = useMemo(() => {
    if (!countIsLoading && reservationCounts) {
      const totalReservationCountTillNow = reservationCounts.data.total_reservations;
      const updatedReservationCount = totalReservationCountTillNow + (reservationDates.length * selectedResturantsForReservationOnAddReservationPage.length)

      let buttonDisable = false;
      let error = false;

      if (subscription_type === "premium") {
        buttonDisable = updatedReservationCount > 25;
        error = updatedReservationCount > 25;
      } else if (subscription_type === "standard") {
        buttonDisable = updatedReservationCount > 5;
        error = updatedReservationCount > 5;
      }

      return {
        buttonDisable,
        totalResevations: updatedReservationCount,
        error
      };
    }

    // Return a default value if countIsLoading is true or reservationCounts is not available
    return resevationCountInfo;
  }, [countIsLoading, reservationCounts, reservationDates, selectedResturantsForReservationOnAddReservationPage, subscription_type]);


  const initialSittingState = {
    showModel: false,
    title: "Add Resturant",
    restaurantDetail: { cover_image_url: "", price: 0, venue_name: "" },
    availableSittings: "any",
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
    releaseDates: "",
    reservationTime: "",
    releaseTime: "",
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

      const formattedStartTime = convertTo12HourFormat(data[0].start_time);
      const formattedEndTime = convertTo12HourFormat(data[0].end_time);
      const reservationTimeNew = `${formattedStartTime} - ${formattedEndTime}`;



      // updating values in state
      state.partySize = data[0].party_size;
      state.reservationTime = reservationTimeNew;
      state.reservationType = data[0].snipe_type;
      state.releaseDates = formateDateFromSingleReservation(data[0].release_date);
      state.releaseTime = data[0].release_time;
      state.reservationDates = Array.from(new Set(data.map((restaurant: { date: string }) => formateDateFromSingleReservation(restaurant.date))))
      state.resturantOptionOnAddReservationPage.selectedResturantsForReservationOnAddReservationPage = data.map((item: { venue_data: unknown }) => item).filter((value: { venue_id: string }, index: Key, self: any[]) => index === self.findIndex((obj) => obj.venue_id === value.venue_id));



      state.finalSnipingDay = data[0]?.final_snipe_date === null ? "none" : data[0]?.final_snipe_date;
      state.overideCurrentReservationToggleSection = data[0].override_reservations ? true : false;
      handleUpdateReservation(dispatch, state);
    }
  }, [singleReservation, singleResevationIsLoading, dispatch, group_id]);

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

  const changeCustomDate = (inputDate: string): string => {
    const parts = inputDate.split("-");
    return `${parts[2]}-${parts[0]}-${parts[1]}`;
  };
  function handleReseveAndUpdateButtonClick(buttonClickType: "update" | "reserve"): void {
    setAllErrorFieldTrue(dispatch);
    if (buttonClickType === "reserve") {
      if (reservationType === "cancel") {
        const { reservationType, resturantOptionOnAddReservationPage: { selectedResturantsForReservationOnAddReservationPage, }, partySize, reservationDates, reservationTime } = reservationFormState;
        if (!selectedResturantsForReservationOnAddReservationPage.length || !partySize || !reservationDates.length || !reservationTime || !reservationType) {
          return console.log("invalid");
        } else {
          const { reservationType, partySize, reservationDates, reservationTime, resturantOptionOnAddReservationPage: { selectedResturantsForReservationOnAddReservationPage }, overideCurrentReservationToggleSection } = reservationFormState;
          const newTime = reservationTime.split("-");
          const convertTo24HourFormat = (timeString: string) => {
            const [time, period] = timeString.trim().split(" ");
            const [hours, minutes] = time.split(":");
            let hours24 = parseInt(hours, 10);

            if (period === "PM" && hours !== "12") {
              hours24 += 12;
            }
            const formattedHours = String(hours24).padStart(2, "0");
            const formattedMinutes = minutes ? minutes.padStart(2, "0") : "00";

            return `${formattedHours}:${formattedMinutes}:00`;
          };

          // Convert both from and to times to 24-hour format
          const fromTime24HourFormat = convertTo24HourFormat(newTime[0]);
          const toTime24HourFormat = convertTo24HourFormat(newTime[1]);

          const reverse_date = reservationDates.map((date) => changeCustomDate(date));
          // Create the reservation time string
          // const reservationTimeNew = `${fromTime24HourFormat} - ${toTime24HourFormat}`;

          // const splitTime = reservationTimeNew.split(" - ");
          // coverted states into formated payload


          const payload = {
            resturants: selectedResturantsForReservationOnAddReservationPage.map((venue) => {
              return {
                venue_id: venue.venue_id,
                venue_name: venue.venue_name,
                table_type: venue.table_type,
              };
            }
            ),
            date: reverse_date,
            override_reservations: overideCurrentReservationToggleSection
              ? 1
              : 0,
            final_snipe_date: formatDateForSnipingDate(finalSnipingDay.value),
            final_snipe_time: null,
            table_type: null,
            reservation_source: "resy",
            snipe_type: reservationType as string,
            start_time: fromTime24HourFormat,
            end_time: toTime24HourFormat,
            party_size: partySize,
          };

          console.log(payload);
          
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
          const newTime = reservationTime.split("-");
          const convertTo24HourFormat = (timeString: string) => {
            const [time, period] = timeString.split(" ");
            const [hours, minutes] = time.split(":");
            let hours24 = parseInt(hours, 10);

            if (period === "PM" && hours !== "12") {
              hours24 += 12;
            }
            const formattedHours = String(hours24).padStart(2, "0");
            const formattedMinutes = minutes ? minutes.padStart(2, "0") : "00";

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
          const reverse_date = reservationDates.map((date) =>
            changeCustomDate(date)
          );

          // const newSplitTime = releaseTime.split(" - ");
          // coverted states into formated payload
          const payload = {
            resturants:
              selectedResturantsForReservationOnAddReservationPage.map(
                (venue) => {
                  return {
                    venue_id: venue.venue_id,
                    venue_name: venue.venue_name,
                    table_type: venue.table_type,
                  };
                }
              ),
            date: reverse_date,
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
            release_time: fromTime24HourFormatNew,
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

          reservationTime,

          resturantOptionOnAddReservationPage: {
            selectedResturantsForReservationOnAddReservationPage,
          },
          overideCurrentReservationToggleSection,
        } = reservationFormState;
        const newTime = reservationTime.split("-");
        const convertTo24HourFormat = (timeString: string) => {
          const [time, period] = timeString.trim().split(" ");
          const [hours, minutes] = time.split(":");
          let hours24 = parseInt(hours, 10);

          if (period === "PM" && hours !== "12") {
            hours24 += 12;
          }
          const formattedHours = String(hours24).padStart(2, "0");
          const formattedMinutes = minutes ? minutes.padStart(2, "0") : "00";

          return `${formattedHours}:${formattedMinutes}:00`;
        };
        const reverse_date = reservationDates.map((date) =>
          changeCustomDate(date)
        );

        // Convert both from and to times to 24-hour format
        const fromTime24HourFormat = convertTo24HourFormat(newTime[0]);
        const toTime24HourFormat = convertTo24HourFormat(newTime[1]);
        const payload = {
          group_id,
          resturants: selectedResturantsForReservationOnAddReservationPage.map(
            (venue) => {
              return {
                venue_id: venue.venue_id,
                venue_name: venue.venue_name,
                table_type: venue.table_type,
              };
            }
          ),
          date: reverse_date,
          override_reservations: overideCurrentReservationToggleSection ? 1 : 0,
          final_snipe_date: null,
          final_snipe_time: null,
          table_type: null,
          reservation_source: "resy",
          snipe_type: reservationType as string,
          start_time: fromTime24HourFormat,
          end_time: toTime24HourFormat,
          party_size: partySize,
        };

        console.log(payload);
        
        updateReservation(payload);
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
        const newTime = reservationTime.split("-");
        const convertTo24HourFormat = (timeString: string) => {
          const [time, period] = timeString.split(" ");
          const [hours, minutes] = time.split(":");
          let hours24 = parseInt(hours, 10);

          if (period === "PM" && hours !== "12") {
            hours24 += 12;
          }
          const formattedHours = String(hours24).padStart(2, "0");
          const formattedMinutes = minutes ? minutes.padStart(2, "0") : "00";

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
        const reverse_date = reservationDates.map((date) => changeCustomDate(date));

        const payload = {
          group_id,
          resturants: selectedResturantsForReservationOnAddReservationPage.map(
            (venue) => {
              return {
                venue_id: venue.venue_id,
                venue_name: venue.venue_name,
                table_type: venue.table_type,
              };
            }
          ),
          date: reverse_date,
          release_date: releaseDates,
          override_reservations: overideCurrentReservationToggleSection ? 1 : 0,
          final_snipe_date: null,
          final_snipe_time: null,
          table_type: null,
          reservation_source: "resy",
          snipe_type: reservationType as string,
          start_time: splitTime[0],
          end_time: splitTime[1],
          release_time: fromTime24HourFormatNew,
          // release_end_time: newSplitTime[1],
          party_size: partySize,
        };
        updateReservation(payload);
      }
    } 
  }

  return (
    <div className="flex justify-between flex-col-reverse sm:flex-row gap-2 text-center">
      {subscription_type === "standard" && (
        <p className={cn("text-xs font-semibold", resevationCountInfo.error ? "text-red-400" : "text-black")} >
          {resevationCountInfo.totalResevations} of 5 reservation requests used
        </p>
      )}

      {subscription_type === "premium" && (
        <p className={cn("text-xs font-semibold", resevationCountInfo.error ? "text-red-400" : "text-black")} >
          {resevationCountInfo.totalResevations} of 25 reservation requests used
        </p>
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
            disabled={updateIsLoading || resevationCountInfo.buttonDisable}
            variant="primary"
            className="sm:w-auto w-[100%]"
            onClick={() => handleReseveAndUpdateButtonClick("update")}
          >
            {updateIsLoading ? <ButtonLoader /> : "Update"}
          </Button>
        ) : (
          <Button
            disabled={isLoading || resevationCountInfo.buttonDisable}
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
