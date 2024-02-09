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
  handleUpdateSelectedRestaurant,
  resetSittingOption,
} from "@/reducer/reservationFormReducer";
import { Plus, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { UserDetailContext } from "@/context/UserDetailProvider";
import { useContext, useEffect } from "react";
import ProIcon from "@/assets/ProIcon.svg";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const AddResturantSection = () => {
  const { state } = useLocation();
  const {
    reservationFormState: {
      resturantOptionOnAddReservationPage: {
        selectedResturantsForReservationOnAddReservationPage,
      },
      reservationType,
      errors: { resturantsError },
    },
    dispatch,
  } = useReservationContext();
  const userDetail = useContext(UserDetailContext);

  useEffect(() => {
    if (state) {
      const { selectedRestaurants } = state;
      console.log(selectedRestaurants);
      handleUpdateSelectedRestaurant(dispatch, selectedRestaurants);
    }
  }, [dispatch, state]);

  
  console.log(selectedResturantsForReservationOnAddReservationPage);

  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Resturants</p>
      {/* </CredenzaTrigger> */}
      {
        <Credenza onOpenChange={() => resetSittingOption(dispatch)}>
          {selectedResturantsForReservationOnAddReservationPage.map(
            (resturant, i) => (
              <Card key={i} className="flex sm:h-[15vh] h-[10vh] my-5">
                <div>
                  <img
                    className="rounded-l-lg h-full sm:w-40 w-36"
                    src={
                      resturant.cover_image_url ??
                      "../restaurant/restaurant.png"
                    }
                    alt={resturant.cover_image_url}
                  />
                </div>
                <CardContent className="p-0 px-5 space-y-2 my-auto w-full">
                  <div className="space-y-1 flex justify-between">
                    <div>
                      <h1 className="text-base font-bold">
                        {resturant.venue_name}
                      </h1>
                      <p className="font-medium text-xs text-light capitalize">
                        {resturant.availableSittings || resturant.seating_types}
                      </p>
                    </div>
                    <X
                      className="cursor-pointer "
                      onClick={() =>
                        deleteResturantForReservation(dispatch, resturant)
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            )
          )}

          {reservationType === "release" ? (
            <>
              {selectedResturantsForReservationOnAddReservationPage.length >
                0 ? (
                <>
                  {" "}
                  <span
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "inline-flex font-semibold text-[11px]  relative cursor-pointer opacity-50"
                    )}
                  >
                    <Plus className="mr-3 " />
                    Add Reservation
                  </span>
                  <p className="text-[10px] text-[red]">
                    Only select single resturant
                  </p>{" "}
                </>
              ) : (
                <>
                  <CredenzaTrigger asChild className="">
                    <Button
                      variant="outline"
                      className="inline-flex font-semibold text-[11px] relative"
                    >
                      <Plus className="mr-3 " /> Add Restaurant
                    </Button>
                  </CredenzaTrigger>
                  <AddResturantModel />
                </>
              )}
            </>
          ) : (
            <>
              {userDetail.subscription_type === "standard" &&
                selectedResturantsForReservationOnAddReservationPage.length >
                0 ? (
                <>
                  <CredenzaTrigger asChild>
                    <span
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "inline-flex font-semibold text-[11px]  relative cursor-pointer"
                      )}
                    >
                      <img
                        src={ProIcon}
                        alt="pro icon"
                        className="absolute right-0 top-0"
                      />
                      <Plus className="mr-3 " /> Add Reservation
                    </span>
                  </CredenzaTrigger>
                  <FeatureIsForProModel />
                  {/* </>} */}
                </>
              ) : (
                <>
                  <CredenzaTrigger asChild className="">
                    <Button
                      variant="outline"
                      className="inline-flex font-semibold text-[11px] relative"
                    >
                      <Plus className="mr-3 " /> Add Restaurant
                    </Button>
                  </CredenzaTrigger>
                  <AddResturantModel />
                </>
              )}
            </>
          )}
        </Credenza>
      }

      {resturantsError &&
        !selectedResturantsForReservationOnAddReservationPage.length && (
          <ErrorMessage message="Please select a restaurant" />
        )}
    </div>
  );
};

export default AddResturantSection;
