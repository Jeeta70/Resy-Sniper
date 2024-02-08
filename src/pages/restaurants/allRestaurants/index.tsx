import { RestaurantCard, RestaurantCardSkeleton, SelectedRestaurantModal } from "@/components";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import { useSearchRestaurants } from "@/features/restaurant/restaurant";
// import { IRestaurant } from "@/types/filteredRestaurants";
import { IRestaurant } from "@/types/restaurants";
import { ChevronLeft, X } from "lucide-react";
import { Key, useEffect, useMemo } from "react";
// import { RestaurantProps } from "@/components/card/restaurantCard";
import { useNavigate } from "react-router-dom";
import SearchAndFilterSection from "../searchAndFilterSection";
import { Credenza, CredenzaTrigger } from "@/components/ui/credenza";
import { useMediaQuery } from "@/hooks/use-media-query";


const Section = () => {
   const navigate = useNavigate();
   const { removeAllRestaurant } = useRestaurantContext();
   // const { restaurants: searchRestaurants, isLoading } = useGetAllRestaurants()
   const { searchRestaurants, isLoading } = useSearchRestaurants();

   const { restaurants: selectedRestaurants, removeRestaurant } = useRestaurantContext();
   // const { topPickRestaurants: searchRestaurants, isLoading } = useTopPicksRestaurants()


   // const [searchParams] = useSearchParams();
   // const _query = searchParams.get("query");

   const desktop = "(min-width: 768px)"
   const isDesktop = useMediaQuery(desktop)
   const numberOfRestaurantToShow = isDesktop ? 4 : 2


   useEffect(() => {
      return () => removeAllRestaurant()
   }, [])


   const filteredRestaurants = useMemo(() => {
      if (!isLoading) {
         return searchRestaurants?.data ?? []
      }
   }, [isLoading, searchRestaurants?.data])



   return (
      <div className=" mr-4">
         <div role="button" onClick={() => navigate("/restaurants")}>
            <ChevronLeft className="inline" size={20} />
            <span className="font-semi-bold text-xs">Back</span>
         </div>
         <div className="flex justify-between">
            <h1 className="my-4 text-lg font-semibold	">All Restaurants</h1>
         </div>
         <div className="mb-7">
            <SearchAndFilterSection />
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
         {selectedRestaurants.length > 0 && (
            <div className="fixed bottom-0 w-[100%] sm:w-[calc(100%_-_22rem)]  transition-all flex flex-wrap justify-between py-5 pr-10 bg-white gap-3">
               <div className="flex gap-3 flex-wrap w-full">
                  {selectedRestaurants.map((restaurant, i) => {
                     if (i < numberOfRestaurantToShow) {
                        return (
                           <div
                              className={buttonVariants({ variant: "outline" })}
                              key={i}
                           >
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

                  {selectedRestaurants.length > numberOfRestaurantToShow && (
                     <>
                        <Credenza>
                           <CredenzaTrigger asChild className="">
                              <Button
                                 variant="outline"
                                 className="inline-flex font-semibold text-[11px] relative"
                              >
                                 +{selectedRestaurants.length - numberOfRestaurantToShow}
                              </Button>
                           </CredenzaTrigger>
                           <SelectedRestaurantModal
                              selectedRestaurants={selectedRestaurants}
                           />
                        </Credenza>
                     </>
                  )}
                  <Button
                     className="ml-auto"
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
               </div>

            </div>
         )}
      </div>
   );
};

export default Section;
