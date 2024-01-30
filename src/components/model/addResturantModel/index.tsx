import { MapPin, X } from "lucide-react";

import { AddRestaurantCard, Model, SearchInputField } from "@/components";
import { Button } from "@/components/ui/button";
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
import searchIcon from "@/assets/Search.svg";

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
  const [query, setSeachParams] = useSearchParams({ query: "" });
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
        "max-w-2xl h-full sm:h-auto pb-0 p-4 sm:p-6 ",
        reservationFormState.selectSittingOptions.showModel && "p-4"
      )}
    >
      <CredenzaHeader className="text-start font-bold text-2xl flex justify-between my-auto p-0">
        <span> {reservationFormState.selectSittingOptions.title}</span>
        <CredenzaClose className="sm:hidden">
          <span role="button">
            <X />
          </span>
        </CredenzaClose>
      </CredenzaHeader>

      {!reservationFormState.selectSittingOptions.showModel ? (
        <>
          <SearchInputField
            onChange={onChange}
            placeholder="Search restaurant"
            searchIcon={true}
            className=""

          />
          {/* <CredenzaDescription className=""> */}
          {filteredRestaurants && !filteredRestaurants.length && (
            <div className=" flex justify-center items-center h-[calc(10rem)] flex-col ">
              <div>
                <img src={searchIcon} alt="" />
              </div>
              <div className="text-light">

                No results found for {query}.Please consider trying a different
                name.
              </div>
            </div>
          )}
          <ScrollArea className="sm:h-96 rounded-md">
            <span className="flex flex-col gap-4">
              {!isLoading &&
                filteredRestaurants.map(
                  (restaurant: IRestaurant, i: Key) => {
                    return (
                      <AddRestaurantCard
                        key={i}
                        restaurant={restaurant}
                        onResturantCardClick={onResturantCardClick}
                      />
                    );
                  }
                )}
            </span>
          </ScrollArea>
          {/* </CredenzaDescription> */}
        </>
      ) : (
        <div className="flex flex-col justify-evenly">
          {/* <span> {reservationFormState.selectSittingOptions.title}fffff</span> */}
          <div className="h-64">
            <img
              className="rounded-lg w-full h-full"
              src={reservationFormState.selectSittingOptions.restaurantDetail.cover_image_url ?? "../reservation/AddReservation/Img.png"}
              alt=""
            />
          </div>
          <div className="py-2">
            <div>
              <p className=" text-xs font-normal text-gray-700 dark:text-gray-400">
                {reservationFormState.selectSittingOptions.restaurantDetail.price}
                $
              </p>
            </div>
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
              {reservationFormState.selectSittingOptions.restaurantDetail.need_to_know_description.slice(0, 700) + (((reservationFormState.selectSittingOptions.restaurantDetail.need_to_know_description.length > 700)) ? "..." : "")}
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
          <Separator className="my-2" />
          <div className="flex justify-end gap-4 mt-auto">
            <CredenzaClose className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </CredenzaClose>
            <CredenzaClose className="w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  const restaurantPayload =
                    reservationFormState.selectSittingOptions.restaurantDetail;
                  Object.defineProperty(
                    restaurantPayload,
                    "availableSittings",
                    {
                      value: avilableSittings,
                      writable: false,
                      enumerable: true,
                      configurable: true,
                    }
                  );

                  selectResturantForReservation(dispatch, restaurantPayload);
                }}
              >
                Confirm
              </Button>
            </CredenzaClose>{" "}
          </div>
        </div>
      )}

      {/* {reservationFormState.selectSittingOptions.showModel &&  <Separator className=" my-5 sm:mt-0" />}
      
        {reservationFormState.selectSittingOptions.showModel && (
          <>
          <div className="flex justify-end gap-4 ">
            <CredenzaClose className="w-full">
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </CredenzaClose>
            <CredenzaClose className="w-full">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  const restaurantPayload =
                    reservationFormState.selectSittingOptions.restaurantDetail;
                  Object.defineProperty(
                    restaurantPayload,
                    "availableSittings",
                    {
                      value: avilableSittings,
                      writable: false,
                      enumerable: true,
                      configurable: true,
                    }
                  );

                  selectResturantForReservation(dispatch, restaurantPayload);
                }}
              >
                Confirm
              </Button>
            </CredenzaClose>{" "}
          </div>
          </>
        )} */}
    </Model>
  );
};

export default AddResturantModel;
