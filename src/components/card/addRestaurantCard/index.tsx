import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { IRestaurant } from '@/types/restaurants';
import ResyIcon from "@/assets/resy.svg"
import OpenTableIcon from "@/assets/openTable.svg"

interface Props {
  restaurant: IRestaurant,
  onResturantCardClick: (restaurant: IRestaurant) => void
}

const AddRestaurantCard = ({ restaurant, onResturantCardClick }: Props) => {


  const renderDollarSigns = () => {
    const dollarSigns = Array.from({ length: restaurant.price }, (_, index) => (
      <span key={index} className="text-[#12171A] opacity-[60%] text-[11px] !font-[600]">&#36;</span>
    ));
    return dollarSigns;
  };

  return (
    <>
      <Card
        className="flex cursor-pointer items-center"
        role="button"
        onClick={() => onResturantCardClick(restaurant)}
      >
        <img
          className="rounded-l-lg min-w-36 w-20 h-32 my-auto"
          src={restaurant.cover_image_url ?? "../restaurant/restaurant.png"}
          alt=""
          loading="lazy"
        />
        <CardContent className="w-full h-auto p-0 px-3">

          <p className="my-1 text-xs font-normal text-gray-700 dark:text-gray-400">
            {renderDollarSigns()}
          </p>

          <div className="flex">
            <h5 className="mb-1 text-base font-bold tracking-tight ">
              {restaurant.venue_name}
            </h5>
            {restaurant.source === "Resy" ? <img src={ResyIcon} alt="resyIcon" className="ml-auto rounded-sm" /> : <img src={OpenTableIcon} alt="Open table icon" className="ml-auto rounded-sm" />}
          </div>
          <p className="mb-3 sm:mb-0  text-xs !font-[600] text-[#12171A]">
            <MapPin className="inline-block" /> {restaurant.locality}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default AddRestaurantCard;
