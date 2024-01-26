import { useEffect } from "react";
import SearchAndFilterSection from "./searchAndFilterSection";
import { AllRestaurantSection, TopPickSection } from "@/components";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import { useSearchParams } from "react-router-dom";
// import { TopPick } from "..";

const Index = () => {
  // const { searchRestaurants, isLoading } = useSearchRestaurants();
  const { removeAllRestaurant } = useRestaurantContext();
  // const { topPickRestaurants, isLoading: topPickIsLoading } = useTopPicksRestaurants()

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);
  

  useEffect(() => {

    return () => removeAllRestaurant()
  }, [])

  // const topPickkRestaurants = useMemo(() => {
  //   if (!topPickIsLoading && topPickRestaurants) {
  //     return topPickRestaurants?.data ? topPickRestaurants.data.slice(0, 4) : []
  //   }
  // }, [topPickIsLoading, topPickRestaurants])



  // const filteredRestaurants = useMemo(() => {
  //   if (!isLoading) {
  //     return searchRestaurants?.data ?? []
  //   }
  // }, [isLoading, searchRestaurants?.data])




  return (
    <div className="w-full h-screen p-10">
      <h1 className="font-bold text-2xl mb-4">Restaurants</h1>
      <SearchAndFilterSection />
      <div className="mt-5">
        {/* {isLoading && <RestaurantCardSkeleton />} */}
      </div>


      {/* {filteredRestaurants && !filteredRestaurants.length && <div className="border-2 border-red-900 flex justify-center items-center h-[calc(100%_-_22rem)]"><img src={searchIcon} alt=""  /></div>} */}
      {/* {!topPickIsLoading && !query && (
        <TopPick
          restaurants={topPickkRestaurants}
          sectionTitle="Top pick"
          seeAllNavigateTo="/restaurants/top-picks"
          
        />
      )} */}
      <TopPickSection/>
      <AllRestaurantSection/>
      {/* {!isLoading && (
        <AllResturantSection
          restaurants={filteredRestaurants}
          sectionTitle="All Restaurants"
        />
      )} */}
    </div>
  );
};

export default Index;
