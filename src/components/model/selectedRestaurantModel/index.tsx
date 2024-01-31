import { X } from "lucide-react";

import { AddRestaurantCard, Model} from "@/components";
import { Button } from "@/components/ui/button";
import { CredenzaClose, CredenzaHeader } from "@/components/ui/credenza";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { cn } from "@/lib/utils";
import { Key,useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
   selectSittingOptions,
} from "@/reducer/reservationFormReducer";
import { IRestaurant } from "@/types/restaurants";

const SelectedRestaurantModel = ({ selectedRestaurants }: { selectedRestaurants: IRestaurant[] }) => {

   const navigate = useNavigate();

   const {dispatch } = useReservationContext();
   const [_query, setSeachParams] = useSearchParams({ query: "" });
   const [searchQuery] = useState("");

   useEffect(() => {
      const timer = setTimeout(() => {
         setSeachParams((prev) => {
            prev.set("query", searchQuery);
            return prev;
         });
      }, 500);
      return () => clearInterval(timer);
   }, [searchQuery, setSeachParams]);

 

   function onResturantCardClick(restauratCardDetail: IRestaurant) {
      selectSittingOptions(dispatch, restauratCardDetail);
   }

   return (
      <Model
         className={cn("max-w-2xl h-full sm:h-auto pb-0 p-4 sm:p-6 " + "p-4 ")}
      >
         <CredenzaHeader className="text-start font-bold text-2xl flex justify-between my-auto p-0 ">
            <span> Selected restaurants</span>
            <CredenzaClose className="sm:hidden">
               <span role="button">
                  <X />
               </span>
            </CredenzaClose>
         </CredenzaHeader>

         <ScrollArea className="sm:h-96 rounded-md ">
            <span className="flex flex-col gap-4 my-auto">
               {selectedRestaurants.map((restaurant: IRestaurant, i: Key) => {
                  return (
                     <AddRestaurantCard
                        key={i}
                        restaurant={restaurant}
                        onResturantCardClick={onResturantCardClick}
                     />
                  );
               })}
            </span>
         </ScrollArea>
        <div className="ml-auto">
            <Button variant="primary" onClick={(e) => {
               e.stopPropagation();
               navigate("/reservations/add-reservation", {
                  state: { selectedRestaurants },
               });
            }} className="">
               Reserve
            </Button>
        </div>
      </Model>
   );
};

export default SelectedRestaurantModel;
