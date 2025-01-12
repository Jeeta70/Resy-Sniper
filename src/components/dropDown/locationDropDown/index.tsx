import { SearchInputField } from "@/components";

import { ScrollArea } from "@/components/ui/scroll-area";

import { useGetResturantSuggestion } from "@/features/restaurant/restaurant";
import { IRestaurant } from "@/types/restaurants";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSeachParamsForLocationForDesktop] = useSearchParams();
  const [locationSearchForDesktop, setlocationSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const { restaurantSuggestions, isLoading: restaurantSuggestionIsLoading } = useGetLoactionSuggestion();
  const { restaurantSuggestions, isLoading: restaurantSuggestionIsLoading } =  useGetResturantSuggestion()

  const restaurantSuggestion = useMemo(() => {
    if (!restaurantSuggestionIsLoading) {
      return restaurantSuggestions?.data;
    }
  }, [restaurantSuggestionIsLoading, restaurantSuggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setSeachParamsForLocationForDesktop((prev) => {
        prev.set("location", locationSearchForDesktop);
        return prev;
      });
    }, 500);
    return () => clearInterval(timer);
  }, [locationSearchForDesktop, setSeachParamsForLocationForDesktop]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlocationSearch(e.target.value);
    if (e.target.value === "") {
      setSeachParamsForLocationForDesktop(() => {
        return ''
      });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSeachParamsForLocationForDesktop((prev) => {
      prev.set("exact_location", suggestion);
      return prev;
    });
  };
  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
        onClick={toggleDropdown}
      >
        {searchParams.get("exact_location") ?? "All locations"}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 opacity-50" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute  mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="px-4 py-3">
            {/* <form onSubmit={handleInputSubmit}> */}
            <SearchInputField
              onChange={handleInputChange}
              placeholder="Search restaurant"
              searchIcon={true}
              defaultValue={searchParams.get("exact_location") ?? ""}
            />
            {/* </form> */}
            <ScrollArea className="max-h-96 min-h-0 overflow-y-scroll top-2">
              <div className="hover:bg-[#12171A0D]-200 font-semibold h-10 flex  items-center left-1 ps-2">
                All locations
              </div>
              {restaurantSuggestion?.map((resturant: IRestaurant) => (
                <div
                  onClick={() =>{
                    handleSuggestionClick(resturant.locality);
                    setIsOpen(prev=>!prev)
                  }}
                  className="hover:bg-gray-200 h-10 flex  items-center ps-2 cursor-pointer"
                  key={resturant.venue_id}
                >
                  {resturant.locality}
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
