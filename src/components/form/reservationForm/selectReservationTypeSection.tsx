import { Button } from '@/components/ui/button';
import { useReservationContext } from '@/context/ReservationFomProvider';
import { handleButtonClickReservationType } from '@/reducer/reservationFormReducer';

const SelectReservationTypeSection = () => {
    const { reservationFormState, dispatch } = useReservationContext();
  return (
    <div>
      <p className="mb-4 font-semibold text-sm">Reservation Type</p>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Button
          className=" font-semibold text-[11px]  rounded-r-none "
          type="button"
          variant={
            reservationFormState.reservationType === "cancelReservation"
              ? "default"
              : "outline"
          }
          onClick={() =>
            handleButtonClickReservationType(dispatch, "cancelReservation")
          }
        >
          Canceled Reservation
        </Button>
        <Button
          className="font-semibold text-[11px] rounded-l-none"
          type="button"
          variant={
            reservationFormState.reservationType === "releaseReservation"
              ? "default"
              : "outline"
          }
          onClick={() =>
            handleButtonClickReservationType(dispatch, "releaseReservation")
          }
        >
          Release Reservation
        </Button>
      </div>
    </div>
  );
}

export default SelectReservationTypeSection