import { useToast } from "@/components/ui/use-toast";
import { IRestaurant } from "@/types/restaurants";
import { createContext, useContext, ReactNode, useState } from "react";

interface RestaurantContextProps {
  restaurants: IRestaurant[];
  addRestaurant: (newRestaurant: IRestaurant) => void;
  removeRestaurant: (Restaurant: IRestaurant) => void;
  removeAllRestaurant: () => void
}


export const RestaurantContext = createContext<
  RestaurantContextProps | undefined
>(undefined);


export function RestaurantContextProvider(props: { children: ReactNode }) {
  const { toast } = useToast();
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const addRestaurant = (newRestaurant: IRestaurant) => {
    setRestaurants((prevRestaurants) => {
      const existingIndex = prevRestaurants.findIndex(
        (r) => r.venue_id === newRestaurant.venue_id
      );

      if (existingIndex !== -1) {
        // If it exists, remove it
        const updatedRestaurants = [...prevRestaurants];
        updatedRestaurants.splice(existingIndex, 1);
        // toast({
        //   title: "Resturant deselected",
        //   variant: "dark",
        // });
        return updatedRestaurants;
      } else {
        // If it doesn't exist, add it
        // toast({
        //   title: "Resturant selected",
        //   variant: "dark",
        // });
        return [...prevRestaurants, newRestaurant];
      }
    });
  };

  const removeRestaurant = (newRestaurant: IRestaurant) => {
    setRestaurants((prevRestaurants) => {
      const filteredRestaurants = prevRestaurants.filter(
        (r) => r.venue_id !== newRestaurant.venue_id
      )
      return filteredRestaurants;
    })
  }

  const removeAllRestaurant = () => {
    setRestaurants([])
  }

  const contextValue: RestaurantContextProps = {
    restaurants,
    addRestaurant,
    removeRestaurant,
    removeAllRestaurant
  };

  return (
    <RestaurantContext.Provider value={contextValue}>
      {props.children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurantContext() {
  const context = useContext(RestaurantContext);

  if (!context) {
    throw new Error(
      "useRestaurantContext must be used within a RestaurantContextProvider"
    );
  }

  return context;
}
