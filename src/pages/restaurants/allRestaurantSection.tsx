import { RestaurantCard } from "@/components";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import { IRestaurant } from "@/types/restaurants";
import { X } from "lucide-react";
// import { RestaurantProps } from "@/components/card/restaurantCard";
import { useNavigate } from "react-router-dom";

interface Props {
  restaurants: IRestaurant[];
  sectionTitle: string;
}

const Section = ({ restaurants, sectionTitle }: Props) => {
  const navigate = useNavigate();
  const { restaurants: selectedRestaurants, removeRestaurant } = useRestaurantContext();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="my-4 text-lg font-semibold	">{sectionTitle}</h1>
        <h1
          className="my-4 text-primary"
          role="button"
          onClick={() => navigate("/restaurants/top-picks")}
        >
          See all
        </h1>
      </div>
      <div className="lg:grid md:flex sm:flex flex flex-wrap grid-cols-4 gap-4">
        {restaurants.map((restaurant, i) => (
          <RestaurantCard
            key={i}
            restaurant={restaurant}
            layout={{ displayFooter: true }}
          />
        ))}
      </div>
      <div className="fixed bottom-0 w-[calc(100%_-_22rem)] transition-all flex p-5 bg-white gap-3">
        {selectedRestaurants.map((restaurant, i) => (
          <div className={buttonVariants({ variant: "outline" })} key={i}>
            {restaurant.venue_name}
            <X className="cursor-pointer bg-gray-400 text-white rounded-full h-[20px] w-[20px] ml-2"
              onClick={(e) => {
                e.stopPropagation();
                removeRestaurant(restaurant);
              }}
            />
          </div>
        ))}

        {!!selectedRestaurants.length && <Button variant="primary">Reserve</Button>}
      </div>
    </div>
  );
};

export default Section;
