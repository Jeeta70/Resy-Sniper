// import { FeatureIsForProModel } from "@/components";
// import { Button, buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
// import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";
import { useReservationContext } from "@/context/ReservationFomProvider";
// import { UserDetailContext } from "@/context/UserDetailProvider";
import { handleButtonClickReservationType } from "@/reducer/reservationFormReducer";
// import { resetReservationForm } from "@/reducer/reservationFormReducer";
// import { useContext } from "react";
// import ProIcon from "@/assets/ProIcon.svg";
// import { cn } from "@/lib/utils";


const SelectReservationTypeSection = () => {
  const { reservationFormState, dispatch } = useReservationContext();
  // const userDetail = useContext(UserDetailContext);

  return (
    <div>
      <p className="mb-4 font-semibold text-sm">Reservation Type</p>
      <div className="inline-flex rounded-md shadow-sm w-full sm:w-auto" role="group">
        <Button
          className="font-semibold text-[11px]  rounded-r-none w-full sm:w-auto"
          type="button"
          variant={reservationFormState.reservationType === "cancel" ? "default" : "outline"}
          onClick={() => handleButtonClickReservationType(dispatch, "cancel")}        >
          Canceled Reservation
        </Button>
        {/* TODO: FINALIZE RELEASE RESERVATIONS */}
        {/* {userDetail.subscription_type === "standard" ?
          <>
            <Credenza>
              <CredenzaTrigger asChild>
                <span
                  className={cn(buttonVariants({ variant: "outline" }), "relative cursor-pointer font-semibold text-[11px] rounded-l-none w-full sm:w-auto")}
                >
                  Release Reservation
                  {
                    <img
                      src={ProIcon}
                      alt="pro icon"
                      className="absolute right-0 top-0"
                    />
                  }
                </span>
              </CredenzaTrigger>
              <FeatureIsForProModel />
            </Credenza>
          </>
          :
          <Button
            className="font-semibold text-[11px] rounded-l-none w-full sm:w-auto"
            type="button"
            variant={reservationFormState.reservationType === "release" ? "default" : "outline"}
            onClick={() => {
              resetReservationForm(dispatch);
              handleButtonClickReservationType(dispatch, "release");
            }}>
            Release Reservation
          </Button>} */}
      </div>
    </div>
  );
};

export default SelectReservationTypeSection;
