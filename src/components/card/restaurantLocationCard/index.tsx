import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import { UserDetailContext } from "@/context/UserDetailProvider";
import { IRestaurant } from "@/types/restaurants";
import { Globe, MapPin, Phone } from "lucide-react";
import { useContext } from "react";

import ProIcon from "@/assets/ProIcon.svg";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";
import { FeatureIsForProModel } from "@/components";
import { useNavigate } from "react-router-dom";

interface Props {
  restaurant: IRestaurant;
}

const Index = ({ restaurant }: Props) => {
  const navigate = useNavigate();
  const { restaurants, addRestaurant } = useRestaurantContext();
  const user = useContext(UserDetailContext);
  const premium = user.subscription_type === "standard" ? false : true;
  const selected = restaurants.some(
    (singleResturant) => singleResturant.venue_id === restaurant.venue_id
  );
  return (
    <>
      <Card className="">
        <img
          className="rounded-t-lg max-h-[250px] w-[100%]"
          src={restaurant.cover_image_url}
          alt=""
        />
        <CardContent className=" p-6">
          <p className="my-3 text-xs font-normal text-gray-700 dark:text-gray-400 hidden">
            $$$$
          </p>
          <h5 className="mb-2 text-base font-medium font-inter tracking-tight ">
            {restaurant.address_1},{restaurant.locality},{restaurant.country},
            {restaurant.postal_code}
          </h5>
          <p className="mb-3 text-xs font-normal text-blue">
            <MapPin className="inline-block" size={15} />
            <span className="ml-1 text-xs"> Get Directions</span>
          </p>
          <p className="mb-3 text-xs font-normal text-blue">
            <Phone className="inline-block" size={15} />
            <span className="ml-1 text-xs">
              {" "}
              {restaurant.restuarant_phone_number}
            </span>
          </p>
          <p className="mb-3 text-xs font-normal text-blue">
            <Globe className="inline-block" size={15} />
            <a
              className="ml-1 text-xs"
              target="_blank"
              href={restaurant.restaurant_website}
            >
              {restaurant.restaurant_website}
            </a>
          </p>
        </CardContent>
        <CardFooter className="flex gap-3">
          {!premium && restaurant.premium ? (
            <div className="flex bg-black text-white text-lg w-full h-full rounded-lg justify-center  items-center gap-3  px-6 py-2 ">
              <span>
                <img src={ProIcon} className="h-6" />
              </span>{" "}
              <span>Requires PRO Subscription</span>
            </div>
          ) : (
            <>
              {premium ? (
                <Button
                  variant={selected ? "selected" : "outline"}
                  className="w-full"
                  onClick={() => addRestaurant(restaurant)}
                >
                  {selected ? "Selected" : "Select"}
                </Button>
              ) : (
                <Credenza>
                  <CredenzaTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full relative"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Select
                      <img src={ProIcon} className=" h-5 absolute top-0 right-0" />
                    </Button>
                  </CredenzaTrigger>
                  <FeatureIsForProModel />
                </Credenza>
              )}
              <Button variant="primary" className="w-full" onClick={(e) => {
                e.stopPropagation()
                navigate("/reservations/add-reservation", { state: { selectedRestaurants: restaurants } })
              }}>
                Reserve
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default Index;
