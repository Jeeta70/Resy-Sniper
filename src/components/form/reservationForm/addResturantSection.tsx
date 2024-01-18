import {
  AddResturantModel,
  ErrorMessage,
  FeatureIsForProModel,
} from "@/components";
import { Button, buttonVariants } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";
import { useReservationContext } from "@/context/ReservationFomProvider";
import {
  deleteResturantForReservation,
  resetSittingOption,
} from "@/reducer/reservationFormReducer";
import { Plus, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { UserDetailContext } from "@/context/UserDetailProvider";
import { useContext } from "react";
import ProIcon from "@/assets/ProIcon.svg";
import { cn } from "@/lib/utils";

const AddResturantSection = () => {
  const { reservationFormState: { resturantOptionOnAddReservationPage: { selectedResturantsForReservationOnAddReservationPage }, errors: { resturantsError } }, dispatch, } = useReservationContext();
  const userDetail = useContext(UserDetailContext);

  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Resturants</p>
<<<<<<< HEAD
      {userDetail.subscription_type === "standard" && selectedResturantsForReservationOnAddReservationPage.length > 0 ? (
        <Credenza>
          <CredenzaTrigger asChild>
            <span className={cn(buttonVariants({ variant: "outline" }), "inline-flex font-semibold text-[11px]  relative cursor-pointer")} >
=======

      {userDetail.subscription_type === "standard" &&
        selectedResturantsForReservationOnAddReservationPage.length > 0 ? (
        <Credenza>
          <CredenzaTrigger asChild>
            <span
              className={cn(
                buttonVariants({ variant: "outline" }),
                "inline-flex font-semibold text-[11px]  relative cursor-pointer"
              )}
            >
>>>>>>> d4e25eb (pull from new design branch)
              <img
                src={ProIcon}
                alt="pro icon"
                className="absolute right-0 top-0"
              />
              <Plus className="mr-3 " /> Add Reservationn
            </span>
          </CredenzaTrigger>
          <FeatureIsForProModel />
        </Credenza>
      ) : (
        <Credenza
<<<<<<< HEAD
          onOpenChange={() => resetSittingOption(dispatch)}
=======
          onOpenChange={() => {
            resetSittingOption(dispatch);
          }}
>>>>>>> d4e25eb (pull from new design branch)
        >
          {selectedResturantsForReservationOnAddReservationPage.map(
            (resturant, i) => (
              <Card key={i} className="flex h-[10vh] my-5">
<<<<<<< HEAD
                <div><img className="rounded-l-lg h-full" src={resturant.cover_image_url ?? "../restaurant/restaurant.png"} alt="" /></div>
=======
                <div>
                  <img
                    className="rounded-l-lg h-full"
                    src={
                      resturant.cover_image_url ??
                      "../restaurant/restaurant.png"
                    }
                    alt=""
                  />
                </div>
>>>>>>> d4e25eb (pull from new design branch)
                <CardContent className="p-0 px-5 space-y-2 my-auto w-full">
                  <div className="space-y-1 flex justify-between">
                    <div>
                      <h1 className="text-base font-bold">
                        {resturant.venue_name}
                      </h1>
                      <p className="font-medium text-xs text-light capitalize">
<<<<<<< HEAD
                        {resturant.availableSittings}
=======
                        {resturant.avilableSittings}
>>>>>>> d4e25eb (pull from new design branch)
                      </p>
                    </div>
                    <X
                      className="cursor-pointer "
<<<<<<< HEAD
                      onClick={() => deleteResturantForReservation(dispatch, resturant)}
=======
                      onClick={() =>
                        deleteResturantForReservation(dispatch, resturant)
                      }
>>>>>>> d4e25eb (pull from new design branch)
                    />
                  </div>
                </CardContent>
              </Card>
            )
          )}
          <CredenzaTrigger asChild className="">
            <Button
              variant="outline"
              className="inline-flex font-semibold text-[11px] relative"
            >
<<<<<<< HEAD
              <Plus className="mr-3 " /> Add Reservationnmmmm
=======
              <Plus className="mr-3 " /> Add Reservation
>>>>>>> d4e25eb (pull from new design branch)
            </Button>
          </CredenzaTrigger>
          <AddResturantModel />
        </Credenza>

      )}
      {/* </CredenzaTrigger> */}

      {resturantsError &&
        !selectedResturantsForReservationOnAddReservationPage.length && (
          <ErrorMessage message="Please select a restaurant" />
        )}
    </div>
  );
};

export default AddResturantSection;
