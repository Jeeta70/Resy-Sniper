import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import { IRestaurant } from "@/types/restaurants";
import { Globe, MapPin, Phone } from "lucide-react";

interface Props {
  restaurant: IRestaurant;
}

const Index = ({ restaurant }: Props) => {
  const { restaurants, addRestaurant } = useRestaurantContext();
  const selected = restaurants.some((singleResturant) => singleResturant.venue_id === restaurant.venue_id)

  return (
    <>
      <Card className="">
        <img
          className="rounded-t-lg max-h-[100px] w-full"
          src={restaurant.cover_image_url}
          alt=""
        />
        <CardContent className="w-3/5 p-6">
          <p className="my-3 text-xs font-normal text-gray-700 dark:text-gray-400 hidden">
            $$$$
          </p>
          <h5 className="mb-2 text-base font-normal tracking-tight ">
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
          <Button
            variant={
              selected
                ? "selected"
                : "outline"
            }
            className="w-full"
            onClick={() => addRestaurant(restaurant)}
          >
            {selected
              ? "Selected"
              : "Select"}
          </Button>
          <Button variant="primary" className="w-full">
            Reserve
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Index;
