import { SearchInputField } from "@/components";

import { ScrollArea } from "@/components/ui/scroll-area";

import { useGetLoactionSuggestion } from "@/features/restaurant/restaurant";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";



const Index = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [searchParams, setSeachParams] = useSearchParams();
   const [locationSearch, setlocationSearch] = useState("");
   const dropdownRef = useRef<HTMLDivElement>(null);
   const location = searchParams.get("location")
   const { restaurantSuggestions, isLoading: restaurantSuggestionIsLoading } =
      useGetLoactionSuggestion();


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
         setSeachParams((prev) => {
            prev.set("location", locationSearch);
            return prev;
         });
      }, 500);
      return () => clearInterval(timer);
   }, [locationSearch, setSeachParams]);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setlocationSearch(e.target.value);
   };

   const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Submitted:", locationSearch);
   };
   return (
      <div ref={dropdownRef} className="relative inline-block text-left">
         <div>
            <button
               type="button"
               className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
               onClick={toggleDropdown}
            >
               Dropdown
               <svg
                  className={`-mr-1 ml-2 h-5 w-5 transition-all ${isOpen ? "rotate-180" : "rotate-0"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
               >
                  <path
                     fillRule="evenodd"
                     d="M10 14l6-6v1.586L11.707 15H9.293L4 9.707V8l6 6z"
                     clipRule="evenodd"
                  />
               </svg>
            </button>
         </div>

         {isOpen && (
            <div className="origin-top-right absolute  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">

               <div className="px-4 py-3">
                  <form onSubmit={handleInputSubmit}>
                     <SearchInputField
                        onChange={handleInputChange}
                        placeholder="Search restaurant"
                        searchIcon={true}
                        defaultValue={location ?? ""}
                     />
                  </form>
                  <ScrollArea className="max-h-96 min-h-20 overflow-y-scroll top-2">
                     <div className="hover:bg-[#12171A0D]-200 font-semibold h-10 flex  items-center left-1 ps-2">All location</div>
                     {restaurantSuggestion?.map((suggestion: string) => (
                        <div className="hover:bg-gray-200 h-10 flex  items-center ps-2 cursor-pointer" key={suggestion}>{suggestion}</div>
                     ))}
                  </ScrollArea>

               </div>

            </div>
         )}

      </div>

   );
};

export default Index;
