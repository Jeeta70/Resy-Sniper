import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export type RestaurantProps = {
  venue_name: string;
  locality: string;
  price: number;
  cover_image_url: string;
};


interface Props {
  restaurant: RestaurantProps;
  layout: {
    displayFooter: boolean;
  };
}

const index = ({ restaurant, layout }: Props) => {
  return (
    <>
      <Card className="">
        <img
          className="rounded-t-lg object-cover h-48 w-96"
          src={restaurant.cover_image_url ?? "../restaurant/restaurant.png"}
          alt=""
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
            <Button variant="outline" className="w-full">
              Select
            </Button>
            <Button variant="primary" className="w-full">
              Reserve
            </Button>
          </CardFooter>
        )}
      </Card>
    </>
  );
};

export default index;
