import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { IRestaurant } from '@/types/restaurants';

interface Props {
  restaurant: IRestaurant,
  onResturantCardClick: (restaurant: IRestaurant) => void
}

const AddRestaurantCard = ({ restaurant, onResturantCardClick }: Props) => {

  return (
    <>
      <Card
        className="flex cursor-pointer"
        role="button"
        onClick={() => onResturantCardClick(restaurant)}
      >
        <img
          className="rounded-lg w-1/3"
          src={restaurant.cover_image_url ?? "../restaurant/restaurant.png"}
          alt=""
        />
        <CardContent className="w-full">
          <p className="my-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            ${restaurant.price}
          </p>
          <h5 className="mb-2 text-base font-bold tracking-tight ">
            {restaurant.venue_name}
          </h5>
          <p className="mb-3  text-xs font-normal text-gray-700 dark:text-gray-400">
            <MapPin className="inline-block" /> {restaurant.locality}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default AddRestaurantCard;
