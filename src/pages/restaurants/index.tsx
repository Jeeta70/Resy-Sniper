import { useEffect } from "react";
import SearchAndFilterSection from "./searchAndFilterSection";
import { AllRestaurantSection, TopPickSection } from "@/components";
import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
import { useSearchParams } from "react-router-dom";

const Index = () => {
  const { removeAllRestaurant } = useRestaurantContext();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");


  useEffect(() => {
    return () => removeAllRestaurant()
  }, [])

  return (
    <div className="w-full h-screen py-10 px-5 sm:px-10">
      <h1 className="font-bold text-2xl mb-4">Restaurants</h1>
      <SearchAndFilterSection />
      {!query && <TopPickSection />}
      <AllRestaurantSection />
    </div>
  );
};

export default Index;
