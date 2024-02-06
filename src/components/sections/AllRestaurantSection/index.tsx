import { RestaurantCard, RestaurantCardSkeleton, SelectedRestaurantModal } from "@/components";
import { Button, buttonVariants } from "@/components/ui/button";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import { useSearchRestaurants } from "@/features/restaurant/restaurant";
// import { IRestaurant } from "@/types/filteredRestaurants";
import { IRestaurant } from "@/types/restaurants";
import { X } from "lucide-react";
import { Key, useEffect, useMemo } from "react";
// import { RestaurantProps } from "@/components/card/restaurantCard";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const navigate = useNavigate();
  const { searchRestaurants, isLoading } = useSearchRestaurants();
  const { removeAllRestaurant } = useRestaurantContext();

  const { restaurants: selectedRestaurants, removeRestaurant } = useRestaurantContext();

  // const [searchParams] = useSearchParams();
  // const query = searchParams.get("query");

  useEffect(() => {
    return () => removeAllRestaurant();
  }, []);

  const filteredRestaurants = useMemo(() => {
    if (!isLoading) {
      return searchRestaurants?.data ?? [];
    }
  }, [isLoading, searchRestaurants?.data]);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="my-4 text-lg font-semibold	">All Restaurants</h1>
        <h1
          className="my-4 text-primary"
          role="button"
          onClick={() => navigate("/restaurants/all-restaurants")}
        >
          See all
        </h1>
      </div>
      {isLoading && <RestaurantCardSkeleton />}

      <div className="lg:grid  md:grid md:grid-cols-2 grid grid-cols-2 gap-3 flex-wrap lg:grid-cols-4 lg:gap-4">
        {!isLoading &&
          filteredRestaurants.map(
            (restaurant: IRestaurant, i: Key | null | undefined) => (
              <RestaurantCard
                key={i}
                restaurant={restaurant}
                layout={{ displayFooter: true }}
              />
            )
          )}
      </div>
      <div className="fixed bottom-0 w-[100%] transition-all flex flex-wrap justify-between py-5 pr-10 bg-white gap-3">
        <div className="flex gap-3 flex-wrap">
          {selectedRestaurants.map((restaurant, i) => {
            if (i < 2) {
              return (
                <div className={buttonVariants({ variant: "outline" })} key={i}>
                  {restaurant.venue_name}
                  <X
                    className="cursor-pointer bg-gray-400 text-white rounded-full h-[20px] w-[20px] ml-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeRestaurant(restaurant);
                    }}
                  />
                </div>
              );
            }
          })}

          {selectedRestaurants.length > 2 && (
            <>
              <Credenza>
                <CredenzaTrigger asChild className="">
                  <Button
                    variant="outline"
                    className="inline-flex font-semibold text-[11px] relative"
                  >
                    +{selectedRestaurants.length - 2}

                  </Button>
                </CredenzaTrigger>
                <SelectedRestaurantModal selectedRestaurants={selectedRestaurants} />
              </Credenza>
            </>
          )}
        </div>

        {!!selectedRestaurants.length && (
          <Button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/reservations/add-reservation", {
                state: { selectedRestaurants },
              });
            }}
            variant="primary"
          >
            Reserve
          </Button>
        )}
      </div>
    </div>
  );
};

export default Section;
