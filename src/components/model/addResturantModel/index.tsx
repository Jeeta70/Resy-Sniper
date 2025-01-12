import { MapPin, X } from "lucide-react";

import {
  AddRestaurantCard,
  FeatureIsForProModel,
  Model,
  SearchInputField,
} from "@/components";
import { Button } from "@/components/ui/button";
import {
  Credenza,
  CredenzaClose,
  CredenzaHeader,
  CredenzaTrigger,
} from "@/components/ui/credenza";
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

  const renderDollarSigns = () => {
    const dollarSigns = Array.from(
      {
        length:
          reservationFormState.selectSittingOptions.restaurantDetail.price,
      },
      (_, index) => (
        <span
          key={index}
          className="text-[#12171A] opacity-[60%] text-[11px] !font-[600]"
        >
          &#36;
        </span>
      )
    );
    return dollarSigns;
  };

  return (
    <Model
      className={cn(
        "max-w-xl h-full sm:h-auto pb-0 p-4 sm:p-6"
      )}
    >
      <CredenzaHeader className="text-start font-bold text-2xl flex justify-between my-5 p-0">
        {/* <CardTitle className=""> */}

        <span> Add Restaurant</span>
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
            <div className=" flex justify-center items-center h-[calc(10rem)] flex-col">
              <div>
                <img src={searchIcon} alt="" />
              </div>
              <div className="text-light">
                No results found for {query}.Please consider trying a different
                name.
              </div>
            </div>
          )}
          <ScrollArea className="sm:h-96 rounded-md mt-3">
            <span className="flex flex-col gap-4">
              {!isLoading &&
                filteredRestaurants.map((restaurant: IRestaurant, i: Key) => {
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
        <ScrollArea className="">
          <div className="flex flex-col justify-evenly">
            {/* <span> {reservationFormState.selectSittingOptions.title}fffff</span> */}
            <div className="h-52 sm:h-72">
              <img
                style={{ objectFit: 'cover' }}
                className="rounded-lg w-full h-full"
                src={
                  reservationFormState.selectSittingOptions.restaurantDetail
                    .cover_image_url ?? "../reservation/AddReservation/Img.png"
                }
                alt=""
              />
            </div>
            <div className="py-2">
              <div>
                <p className=" text-xs font-normal text-gray-700 dark:text-gray-400">
                  {renderDollarSigns()}
                </p>
              </div>
              <h5 className="mb-2 text-base font-bold tracking-tight ">
                {
                  reservationFormState.selectSittingOptions.restaurantDetail
                    .venue_name
                }
              </h5>
              <p className="mb-3 sm:mb-0  text-xs !font-[600] text-[#12171A] ">
                <MapPin className="inline-block" /> Prospective height
              </p>
              <p className="font-normal text-xs text-light">
                {reservationFormState.selectSittingOptions.restaurantDetail.need_to_know_description.slice(
                  0,
                  300
                ) +
                  (reservationFormState.selectSittingOptions.restaurantDetail
                    .need_to_know_description.length > 700
                    ? "..."
                    : "")}
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
                    <Credenza>
                      {selectAvailableSittingsButtons.map((button, i) => (
                        <>
                          <CredenzaTrigger asChild>
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
                          </CredenzaTrigger>
                          <FeatureIsForProModel />
                        </>
                      ))}
                    </Credenza>
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
                    const { venue_id, venue_name } = reservationFormState.selectSittingOptions.restaurantDetail;
                    const payload = { venue_id, venue_name, table_type: avilableSittings, venueData: reservationFormState.selectSittingOptions.restaurantDetail }


                    // Object.defineProperty(
                    //   restaurantPayload,
                    //   "availableSittings",
                    //   {
                    //     value: avilableSittings,
                    //     writable: false,
                    //     enumerable: true,
                    //     configurable: true,
                    //   }
                    // );
                    selectResturantForReservation(dispatch, payload);
                  }}
                >
                  Confirm
                </Button>
              </CredenzaClose>{" "}
            </div>
          </div>
        </ScrollArea>
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
