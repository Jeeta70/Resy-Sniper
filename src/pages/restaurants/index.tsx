import { useMemo } from "react";
import AllResturantSection from "./allRestaurantSection";
import SearchAndFilterSection from "./searchAndFilterSection";

import {
  useSearchRestaurants,
} from "@/features/restaurant/restaurant";
import { RestaurantCardSkeleton } from "@/components";

const Index = () => {
  const { searchRestaurants, isLoading } = useSearchRestaurants();
  
  const filteredRestaurants = useMemo(() => {
    if (!isLoading) {
      return searchRestaurants?.data ?? []
    }
  }, [isLoading, searchRestaurants?.data])



  return (
    <div className="w-full h-screen p-10">
      <h1 className="font-bold text-2xl mb-4">Restaurants</h1>
      <SearchAndFilterSection />
      <div className="mt-5">
        {isLoading && <RestaurantCardSkeleton />}
      </div>

      {!isLoading && (
        <AllResturantSection
          restaurants={filteredRestaurants}
          sectionTitle="All Restaurants"
        />
      )}
    </div>
  );
};

export default Index;
