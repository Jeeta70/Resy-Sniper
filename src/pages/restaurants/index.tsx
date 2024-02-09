import { useEffect } from "react";
import SearchAndFilterSection from "./searchAndFilterSection";
import { AllRestaurantSection, TopPickSection } from "@/components";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import { useSearchParams } from "react-router-dom";

const Index = () => {
  const { removeAllRestaurant } = useRestaurantContext();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const price = searchParams.get("price");
  const exact_location = searchParams.get("exact_location");





  useEffect(() => {
    return () => removeAllRestaurant()
  }, [])

  return (
    <div className="w-full h-screen py-10 sm:py-0 px-5 sm:px-10">
      <h1 className="font-bold text-2xl mb-4">Restaurants</h1>
      <SearchAndFilterSection />
      {!query?.length && !price?.length && !exact_location?.length && <TopPickSection />}
      <AllRestaurantSection />
    </div>
  );
};

export default Index;
