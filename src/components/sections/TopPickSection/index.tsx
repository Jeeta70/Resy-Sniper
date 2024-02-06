import { RestaurantCard, RestaurantCardSkeleton } from "@/components";
// import { Button, buttonVariants } from "@/components/ui/button";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import { useTopPicksRestaurants } from "@/features/restaurant/restaurant";
// import { IRestaurant } from "@/types/filteredRestaurants";
import { IRestaurant } from "@/types/restaurants";
// import { X } from "lucide-react";
import { Key, useEffect, useMemo } from "react";
// import { RestaurantProps } from "@/components/card/restaurantCard";
import { useNavigate } from "react-router-dom";


const Section = () => {
  const navigate = useNavigate();
  // const { searchRestaurants, isLoading } = useSearchRestaurants();
  const { removeAllRestaurant } = useRestaurantContext();

  // const { restaurants: selectedRestaurants, removeRestaurant } = useRestaurantContext();
  const { topPickRestaurants: searchRestaurants, isLoading } = useTopPicksRestaurants()

  // const [searchParams] = useSearchParams();
  // const _query = searchParams.get("query");


  useEffect(() => {

    return () => removeAllRestaurant()
  }, [])


  const filteredRestaurants = useMemo(() => {
    if (!isLoading) {
      return searchRestaurants?.data.slice(0, 4) ?? []
    }
  }, [isLoading, searchRestaurants?.data])


  return (
    <div>
      <div className="flex justify-between">
        <h1 className="my-4 text-lg font-semibold	">Top Picks</h1>

        <h1
          className="my-4 text-primary"
          role="button"
          onClick={() => navigate("/restaurants/top-picks")}
        >
          See all
        </h1>
      </div>
      {isLoading && <RestaurantCardSkeleton />}
      <div className="lg:grid  md:grid md:grid-cols-2 grid grid-cols-2 gap-3 flex-wrap lg:grid-cols-4 lg:gap-4">
        {!isLoading && filteredRestaurants.map((restaurant: IRestaurant, i: Key | null | undefined) => (
          <RestaurantCard
            key={i}
            restaurant={restaurant}
            layout={{ displayFooter: true }}
          />
        ))}
      </div>
      {/* <div className="sticky bottom-0 w-[100%] transition-all flex justify-between p-5 bg-white gap-3">
        <div className="flex gap-2 w-auto">
          {selectedRestaurants.map((restaurant, i) => (
            <div className={buttonVariants({ variant: "outline" })} key={i}>
              <span className="text-xs">{restaurant.venue_name}</span>
              <X className="cursor-pointer bg-gray-400 text-white rounded-full h-[20px] w-[20px] ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  removeRestaurant(restaurant);
                }}
              />
            </div>
          ))}
        </div>

        {!!selectedRestaurants.length && <Button onClick={(e) => {
          e.stopPropagation()
          navigate("/reservations/add-reservation", { state: { selectedRestaurants } })
        }} variant="primary">Reserve</Button>}
      </div> */}
    </div>
  );
};

export default Section;
