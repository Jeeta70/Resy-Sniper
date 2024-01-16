import { MapPin, X } from "lucide-react";

import { AddRestaurantCard, Model, SearchInputField } from "@/components";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { CredenzaClose, CredenzaHeader } from "@/components/ui/credenza";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { cn } from "@/lib/utils";
import { useSearchRestaurants } from "@/features/restaurant/restaurant";
import { Key, useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  selectResturantForReservation,
  selectSittingOptions,
} from "@/reducer/reservationFormReducer";
import { IRestaurant } from "@/types/restaurants";
import { UserDetailContext } from "@/context/UserDetailProvider";

import ProIcon from "@/assets/ProIcon.svg";

const selectAvailableSittingsButtons = [
  { lable: "Indoor", value: "indoor" },
  { lable: "Outdoor", value: "outdoor" },
];

const AddResturantModel = () => {
  const userDetail = useContext(UserDetailContext);
  const [avilableSittings, setAvilableSittings] = useState("any");
  const { reservationFormState, dispatch } = useReservationContext();
  const { searchRestaurants, isLoading } = useSearchRestaurants();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSeachParams] = useSearchParams({ query: "" });
  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeachParams((prev) => {
        prev.set("query", searchQuery);
        return prev;
      });
    }, 500);
    return () => clearInterval(timer);
  }, [searchQuery, setSeachParams]);

  const filteredRestaurants = useMemo(() => {
    if (!isLoading) {
      return searchRestaurants?.data ?? [];
    }
  }, [isLoading, searchRestaurants?.data]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setsearchQuery(e.target.value);
  }

  function onResturantCardClick(restauratCardDetail: IRestaurant) {
    selectSittingOptions(dispatch, restauratCardDetail);
  }

  return (
    <Model
      className={cn(
        "max-w-2xl h-screen sm:h-auto",
        reservationFormState.selectSittingOptions.showModel && "p-4"
      )}
    >
      <CredenzaHeader className="">
        <CardTitle className=" mb-0 sm:mb-5 text-start font-bold text-2xl flex justify-between">
          <span> {reservationFormState.selectSittingOptions.title}</span>
          <CredenzaClose className="sm:hidden">
            <span role="button">
              <X />
            </span>
          </CredenzaClose>
        </CardTitle>
      </CredenzaHeader>

      {!reservationFormState.selectSittingOptions.showModel ? (
        <>
          <SearchInputField onChange={onChange} />
          {/* <CredenzaDescription className=""> */}
          <ScrollArea className="sm:h-80 rounded-md">
            <span className="flex flex-col gap-4">
              {!isLoading &&
                filteredRestaurants.map((restaurant: IRestaurant,i: Key | null | undefined) => {                  
                  return (
                    <AddRestaurantCard
                      key={i}
                      restaurant={restaurant}
                      onResturantCardClick={onResturantCardClick}
                    />
                  );
                })}
            </span>
          </ScrollArea>
          {/* </CredenzaDescription> */}
        </>
      ) : (
        <div className="flex flex-col justify-between">
          <div>
            <img
              className="rounded-lg w-full object-cover"
              src={
                reservationFormState.selectSittingOptions.restaurantDetail
                  .cover_image_url ?? "../reservation/AddReservation/Img.png"
              }
              alt=""
            />
          </div>
          <div>
            <p className="my-3 text-xs font-normal text-gray-700 dark:text-gray-400">
              {reservationFormState.selectSittingOptions.restaurantDetail.price}
              $
            </p>
            <h5 className="mb-2 text-base font-bold tracking-tight ">
              {
                reservationFormState.selectSittingOptions.restaurantDetail
                  .venue_name
              }
            </h5>
            <p className="mb-3  text-xs font-normal ">
              <MapPin className="inline-block" /> Prospective height
            </p>
            <p className="font-normal text-xs text-light">
              Talk about returning to your roots: Though known for his
              sophisticated high-end French cuisine, Daniel Boulud is from the
              great gastronomic capital of Lyon and with Le Gratin, he pays
              tribute to the hearty, homey cooking of the convivial Lyonnais
              bistros known as bouchons. The defining dish here? The creamy
              potato extravaganza that is the gratin dauphinois, of course.
            </p>
            <h2 className="font-semibold text-sm my-3">Available sittings</h2>
            <div className="flex w-1/2 gap-2">
              <Button
                onClick={() => {
                  setAvilableSittings("any");
                }}
                variant={avilableSittings === "any" ? "default" : "outline"}
                className="w-full"
              >
                Any
              </Button>

              {userDetail.subscription_type === "standard" ? (
                <>
                  {" "}
                  {selectAvailableSittingsButtons.map((button, i) => (
                    <Button
                      key={i}
                      variant={
                        avilableSittings === button.value
                          ? "default"
                          : "outline"
                      }
                      className="w-full relative"
                    >
                      {button.lable}
                      <img
                        src={ProIcon}
                        alt="pro icon"
                        className="absolute right-0 top-0"
                      />
                    </Button>
                  ))}
                </>
              ) : (
                <>
                  {selectAvailableSittingsButtons.map((button, i) => (
                    <Button
                      onClick={() => {
                        setAvilableSittings(button.value);
                      }}
                      key={i}
                      variant={
                        avilableSittings === button.value
                          ? "default"
                          : "outline"
                      }
                      className="w-full"
                    >
                      {button.lable}
                    </Button>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <Separator />
      <div className="flex justify-end gap-4">
        <Button variant="outline" className="">
          Cancel
        </Button>

        <CredenzaClose className="">
          <Button
            variant="primary"
            className=""
            onClick={() => {
              const restaurantPayload =
                reservationFormState.selectSittingOptions.restaurantDetail;
              Object.defineProperty(restaurantPayload, "availableSittings", {
                value: avilableSittings,
                writable: false,
                enumerable: true,
                configurable: true,
              });

              selectResturantForReservation(dispatch, restaurantPayload);
            }}
          >
            Confirm
          </Button>
        </CredenzaClose>
      </div>
    </Model>
  );
};

export default AddResturantModel;
