import * as React from "react";
import { ChevronDownIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useSearchParams } from "react-router-dom";
import { SearchInputField } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetLoactionSuggestion } from "@/features/restaurant/restaurant";


export default function DrawerDemo() {
  const { restaurantSuggestions, isLoading: restaurantSuggestionIsLoading } =
    useGetLoactionSuggestion();

  const restaurantSuggestion = React.useMemo(() => {
    if (!restaurantSuggestionIsLoading) {
      return restaurantSuggestions?.data;
    }
  }, [restaurantSuggestionIsLoading, restaurantSuggestions]);

  const [locationSearch, setlocationSearch] = React.useState("");

  const [, setSeachParamss] = useSearchParams();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSeachParamss((prev) => {
        prev.set("location", locationSearch);
        return prev;
      });
    }, 500);
    return () => clearInterval(timer);
  }, [locationSearch, setSeachParamss]);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlocationSearch(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSeachParamss((prev) => {
      prev.set("exact_location", suggestion);
      return prev;
    });
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[50%]">All location  <ChevronDownIcon className="inline-block ml-auto sm:ml-0" /></Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex justify-between">
          <DrawerTitle className="font-bold text-2xl text-start">
            Location
          </DrawerTitle>
          <DrawerClose>
            <X />
          </DrawerClose>
        </DrawerHeader>
        <DrawerFooter>

          {/* <div className=" mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <div className="px-4 py-3"> */}
          {/* <form onSubmit={handleInputSubmit}> */}
          <SearchInputField
            onChange={handleInputChange}
            placeholder="Search restaurant"
            searchIcon={true}
          />
          {/* </form> */}
          <ScrollArea className="max-h-96 min-h-32 overflow-y-scroll top-2">
            <div className="hover:bg-[#12171A0D]-200 font-semibold h-10 flex  items-center left-1 ps-2">
              All location
            </div>
            {restaurantSuggestion?.map((suggestion: string) => (
              <DrawerClose
                onClick={() => handleSuggestionClick(suggestion)}
                className="hover:bg-gray-200 h-10 flex  items-center ps-2 cursor-pointer"
                key={suggestion}
              >
                {suggestion}
              </DrawerClose>
            ))}
          </ScrollArea>
          {/* </div>
          </div> */}

        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
