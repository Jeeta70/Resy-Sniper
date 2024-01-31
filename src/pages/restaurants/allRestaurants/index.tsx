import { RestaurantCard, RestaurantCardSkeleton } from "@/components";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import {useSearchRestaurants } from "@/features/restaurant/restaurant";
// import { IRestaurant } from "@/types/filteredRestaurants";
import { IRestaurant } from "@/types/restaurants";
import { ChevronLeft, X } from "lucide-react";
import { Key, useEffect, useMemo } from "react";
// import { RestaurantProps } from "@/components/card/restaurantCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchAndFilterSection from "../searchAndFilterSection";


const Section = () => {
   const navigate = useNavigate();
   const { removeAllRestaurant } = useRestaurantContext();
   // const { restaurants: searchRestaurants, isLoading } = useGetAllRestaurants()
   const { searchRestaurants, isLoading } = useSearchRestaurants();

   const { restaurants: selectedRestaurants, removeRestaurant } = useRestaurantContext();
   // const { topPickRestaurants: searchRestaurants, isLoading } = useTopPicksRestaurants()


   console.log(searchRestaurants);
   

   const [searchParams] = useSearchParams();
   const query = searchParams.get("query");
   console.log(query);


   useEffect(() => {
      return () => removeAllRestaurant()
   }, [])


   const filteredRestaurants = useMemo(() => {
      if (!isLoading) {
         return searchRestaurants?.data ?? []
      }
   }, [isLoading, searchRestaurants?.data])



   return (
      <div>
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
         <div className="lg:grid md:flex sm:flex flex flex-wrap grid-cols-4 gap-4">
            {!isLoading && filteredRestaurants.map((restaurant: IRestaurant, i: Key | null | undefined) => (
               <RestaurantCard
                  key={i}
                  restaurant={restaurant}
                  layout={{ displayFooter: true }}
               />
            ))}
         </div>
         <div className="fixed bottom-0 w-[calc(100%_-_22rem)] transition-all flex justify-between p-5 bg-white gap-3">
            <div className="flex gap-3">
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
            </div>

            {!!selectedRestaurants.length && <Button onClick={(e) => {
               e.stopPropagation()
               navigate("/reservations/add-reservation", { state: { selectedRestaurants } })
            }} variant="primary">Reserve</Button>}
         </div>
      </div>
   );
};

export default Section;
