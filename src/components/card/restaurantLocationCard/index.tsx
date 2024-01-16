import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Globe, MapPin, Phone } from "lucide-react";

interface Props {
  restaurant: {
    cover_image_url: string,
    address_1: string;
    locality: string;
    country: string;
    postal_code: string;
    restuarant_phone_number: string;
    restaurant_website: string;
  };
  handleSelectResturant: () => void
}

const index = ({ restaurant, handleSelectResturant }: Props) => {


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
            {restaurant.address_1},{restaurant.locality},{restaurant.country},{restaurant.postal_code}
          </h5>
          <p className="mb-3 text-xs font-normal text-blue">
            <MapPin className="inline-block" size={15} />
            <span className="ml-1 text-xs"> Get Directions</span>
          </p>
          <p className="mb-3 text-xs font-normal text-blue">
            <Phone className="inline-block" size={15} />
            <span className="ml-1 text-xs"> {restaurant.restuarant_phone_number}</span>
          </p>
          <p className="mb-3 text-xs font-normal text-blue">
            <Globe className="inline-block" size={15} />
            <a className="ml-1 text-xs" target="_blank" href={restaurant.restaurant_website}>
              {restaurant.restaurant_website}
            </a>
          </p>
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button variant="outline" className="w-full" onClick={handleSelectResturant}>
            Select
          </Button>
          <Button variant="primary" className="w-full">
            Reserve
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default index;
