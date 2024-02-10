import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import { IRestaurant } from "@/types/restaurants";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProIcon from "@/assets/ProIcon.svg";
import { UserDetailContext } from "@/context/UserDetailProvider";
import { useContext } from "react";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";
import { AccountNotConnectedModal, FeatureIsForProModel } from "@/components";
import { cn } from "@/lib/utils";
import ResyIcon from "@/assets/resy-logo-circle.png";
import OpenTableIcon from "@/assets/opentable.png";


interface Props {
  restaurant: IRestaurant;
  layout: {
    displayFooter: boolean;
  };
}

const Index = ({ restaurant, layout }: Props) => {
  const navigate = useNavigate();
  const user = useContext(UserDetailContext);
  const premium = user.subscription_type === "standard" ? false : true;
  const resy_token = user.resy_token;
  const ot_access_token = user.ot_access_token;

  const { restaurants, addRestaurant } = useRestaurantContext();

  const selected = restaurants.some(
    (singleResturant) => singleResturant.venue_id === restaurant.venue_id
  );

  const renderDollarSigns = () => {
    const dollarSigns = Array.from({ length: restaurant.price }, (_, index) => (
      <span
        key={index}
        className="text-[#12171A] opacity-[60%] text-[11px] !font-[600]"
      >
        &#36;
      </span>
    ));
    return dollarSigns;
  };

  return (
    <>
      <Card
        className="cursor-pointer w-full"
        onClick={() => navigate(`/restaurant/${restaurant.venue_id}`)}
      >
        <div className="relative">
          {restaurant.reservation_source === "resy" ? (
            <img
              src={ResyIcon}
              alt="resyIcon"
              className="ml-auto rounded-sm absolute h-10 top-1 left-1"
            />
          ) : (
            <img
              src={OpenTableIcon}
              alt="Open table icon"
              className="ml-auto rounded-sm absolute h-10 top-1 left-1"
            />
          )}
          <img
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg object-cover h-36 w-[100%]"
            src={restaurant.cover_image_url ?? "../restaurant/restaurant.png"}
            alt=""
            loading="lazy"
          />
        </div>
        <CardContent className="p-0 px-6 h-auto">
          <p className="mt-3 mb-1  text-xs font-normal text-gray-700 dark:text-gray-400">
            {renderDollarSigns()}
          </p>
          <h5 className="mb-1 text-[16px] !font-[700] tracking-tight ">
            {restaurant.venue_name}
          </h5>
          <p className="mb-3 sm:mb-0  text-xs !font-[600] text-[#12171A]">
            <MapPin className="inline-block h-4 w-4" /> {restaurant.locality}
          </p>
        </CardContent>
        {layout.displayFooter && (
          <CardFooter className="xl:flex xl:gap-3 mt-3 grid gap-3">
            {!premium && restaurant.premium ? (
              <Credenza>
                <CredenzaTrigger asChild>
                  {/* <div className="flex bg-black text-white text-xs w-full h-full rounded-lg justify-center  items-center gap-2  px-4 py-2"> */}
                  {/* <span>
                      <img src={ProIcon} className="w-8" />
                    </span>{" "}
                    <span className=" font-bold " >Requires PRO Subscription</span> */}
                  {/* </div> */}
                  <span
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full relative bg-[black] text-[white] hover:bg-[black] hover:text-white sm:text-sm text-xs"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Requires PRO Subscription{" "}
                    <img
                      src={ProIcon}
                      className=" h-[15px] absolute top-0 right-0"
                    />
                  </span>
                </CredenzaTrigger>
                <FeatureIsForProModel />
              </Credenza>
            ) : (
              <>
                {premium ? (
                  <>
                    {/* Check if restaurant source is Open table and user Open table account is not connected */}
                    {restaurant.reservation_source === "opentable" && !ot_access_token ? (
                      <Credenza>
                        <CredenzaTrigger asChild>
                          <Button
                            variant={"outline"}
                            className="w-full"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            Select
                          </Button>
                        </CredenzaTrigger>
                        <AccountNotConnectedModal
                          restaurantSource={restaurant.reservation_source}
                        />
                      </Credenza>
                    ) : restaurant.reservation_source === "resy" && !resy_token ? (
                      <>
                        {/* Check if restaurant source is Rest and user Resy account is not connected */}
                        <Credenza>
                          <CredenzaTrigger asChild>
                            <Button
                              variant={"outline"}
                              className="w-full"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              Select
                            </Button>
                          </CredenzaTrigger>
                          <AccountNotConnectedModal
                            restaurantSource={restaurant.reservation_source}
                          />
                        </Credenza>
                      </>
                    ) : (
                      <Button
                        variant={selected ? "selected" : "outline"}
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          addRestaurant(restaurant);
                        }}
                      >
                        {selected ? "Selected" : "Select"}
                      </Button>
                    )}
                  </>
                ) : (
                  <>
                    <Credenza>
                      <CredenzaTrigger asChild>
                        <span
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "w-full relative"
                          )}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          Select{" "}
                          <img
                            src={ProIcon}
                            className=" h-[15px] absolute top-0 right-0"
                          />
                        </span>
                      </CredenzaTrigger>
                      <FeatureIsForProModel />
                    </Credenza>
                  </>
                )}
                {/* Check if restaurant source is Open table and user Open table account is not connected */}
                {restaurant.reservation_source === "opentable" && !ot_access_token ? (
                  <Credenza>
                    <CredenzaTrigger asChild>
                      <Button
                        variant="primary"
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Reserve
                      </Button>
                    </CredenzaTrigger>
                    <AccountNotConnectedModal
                      restaurantSource={restaurant.reservation_source}
                    />
                  </Credenza>
                ) : restaurant.reservation_source === "resy" && !resy_token ? (
                  <>
                    {/* Check if restaurant source is Rest and user Resy account is not connected */}
                    <Credenza>
                      <CredenzaTrigger asChild>
                        <Button
                          variant="primary"
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          Reserve
                        </Button>
                      </CredenzaTrigger>
                      <AccountNotConnectedModal
                        restaurantSource={restaurant.reservation_source}
                      />
                    </Credenza>
                  </>
                ) : (
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/reservations/add-reservation", {
                        state: { selectedRestaurants: [restaurant] },
                      });
                    }}
                  >
                    Reserve
                  </Button>
                )}
              </>
            )}
          </CardFooter>
        )}
      </Card>
    </>
  );
};

export default Index;
