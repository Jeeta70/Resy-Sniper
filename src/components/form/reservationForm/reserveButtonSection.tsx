import { DiscardChangesModal } from "@/components";
import { Button } from "@/components/ui/button";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { setAllErrorFieldTrue } from "@/reducer/reservationFormReducer";

const ReserveButtonSection = () => {
  const { reservationFormState, dispatch } = useReservationContext();
  // const { booking } = useCreateReservation()
  

  return (
    <div className="flex justify-between flex-col-reverse sm:flex-row gap-2 text-center">
      <p className="text-xs font-semibold ">
        2 of 25 reservation requests used
      </p>
      <div className="flex gap-5">
        <DiscardChangesModal>
          <Button variant="outline">Cancel</Button>
        </DiscardChangesModal>
        <Button
          variant="primary"
          onClick={() => {
            setAllErrorFieldTrue(dispatch);
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
          
              // const payload = {
              //   resturants:[],
              //   date:[],
              //   times: [{ start_time: "", end_time: "" }, { start_time: "", end_time: "" }],

              // }

              // selectedResturantsForReservationOnAddReservationPage.forEach((resturant)=>{
              //   return payload.resturants.push({ venue_id: resturant.venue_id, venue_name: resturant.venue_name });
              // })
              
              // reservationDates.forEach((resurvation)=>{
              //   payload.date.push(format(resurvation, "PP"))
              // })
              // console.log("payload=>",payload);

            
              //  booking()
            }
          }}
        >
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default ReserveButtonSection;
