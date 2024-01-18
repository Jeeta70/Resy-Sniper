import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import { IRestaurant } from "@/types/restaurants";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProIcon from "@/assets/ProIcon.svg";
import {
  UserDetailContext,
} from "@/context/UserDetailProvider";
import { useContext } from "react";
import React from "react";

// type RestaurantProps = {
//   venue_id: number;
//   venue_name: string;
//   locality: string;
//   price: number;
//   cover_image_url: string;
// };
<<<<<<< HEAD
=======

>>>>>>> d4e25eb (pull from new design branch)

interface Props {
  restaurant: IRestaurant;
  layout: {
    displayFooter: boolean;
  };
}

const Index = ({ restaurant, layout }: Props) => {
<<<<<<< HEAD
  const navigate = useNavigate();
  const user = useContext(UserDetailContext);
  const premium = user.subscription_type === "standard" ? false : true;

  const { restaurants, addRestaurant } = useRestaurantContext();
  const selected = restaurants.some(
    (singleResturant) => singleResturant.venue_id === restaurant.venue_id
  );
=======
  const navigate = useNavigate()

  const { restaurants, addRestaurant } = useRestaurantContext();
  const selected = restaurants.some((singleResturant) => singleResturant.venue_id === restaurant.venue_id)

>>>>>>> d4e25eb (pull from new design branch)

  return (
    <>
      <Card
        className="cursor-pointer"
        onClick={() => navigate(`/restaurant/${restaurant.venue_id}`)}
      >
        <img
          className="rounded-t-lg object-cover h-48 w-96"
          src={restaurant.cover_image_url ?? "../restaurant/restaurant.png"}
          alt=""
          loading="lazy"
        />
        <CardContent>
          <p className="my-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            {restaurant.price}$
          </p>
          <h5 className="mb-2 text-base font-bold tracking-tight ">
            {restaurant.venue_name}
          </h5>
          <p className="mb-3  text-xs font-normal text-gray-700 dark:text-gray-400">
            <MapPin className="inline-block" /> {restaurant.locality}
          </p>
        </CardContent>
        {layout.displayFooter && (
          <CardFooter className="flex gap-3">
<<<<<<< HEAD
            {!premium && restaurant.premium ? (
              <div className="flex bg-black text-white text-lg w-full h-full rounded-sm justify-center  items-center gap-3  px-6 py-2 ">
                <span>
                  <img src={ProIcon} className="h-6" />
                </span>{" "}
                <span>Requires PRO Subscription</span>
              </div>
            ) : (
              <>
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
                <Button variant="primary" className="w-full">
                  Reserve
                </Button>{" "}
              </>
            )}
=======
            <Button variant={
              selected
                ? "selected"
                : "outline"
            } className="w-full" onClick={(e) => {
              e.stopPropagation();
              addRestaurant(restaurant)

            }}>
              {selected
                ? "Selected"
                : "Select"}
            </Button>
            <Button variant="primary" className="w-full">
              Reserve
            </Button>
>>>>>>> d4e25eb (pull from new design branch)
          </CardFooter>
        )}
      </Card>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Index);
