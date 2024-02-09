/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DrawerForAllLocation,
  DrawerForPriceFilter,
  DropDown,
  LocationDropDown,
  SearchInputField,
} from "@/components";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectGroup, SelectItem } from "@/components/ui/select";

const SearchAndFilterSection = () => {

 
  const [searchParams, setSeachParams] = useSearchParams();
  const query = searchParams.get("query");
  const [searchQuery, setsearchQuery] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setsearchQuery(e.target.value);
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      setSeachParams((prev) => {
        prev.set("query", searchQuery);
        return prev;
      });
    }, 500);
    return () => clearInterval(timer);
  }, [searchQuery, setSeachParams]);


  function priceSuggestionChange(price: string) {
    setSeachParams((prev) => {
      prev.set("price", price);
      return prev;
    });
  }

  

  return (
    <div className="lg:flex block gap-4">
      <SearchInputField
        onChange={onChange}
        placeholder="Search restaurant"
        searchIcon={true}
        defaultValue={query ?? ""}
      />
      <div className="lg:grid lg:grid-cols-2  gap-2 mt-3 lg:mt-0 hidden sm:block">
        <DropDown
          onValueChange={priceSuggestionChange}
          placeholder="All Prices"
        >
          <SelectGroup>
            <SelectItem value={"$"}>$</SelectItem>
            <SelectItem value={"$$"}>$$</SelectItem>
            <SelectItem value={"$$$"}>$$$</SelectItem>
            <SelectItem value={"$$$$"}>$$$$</SelectItem>
          </SelectGroup>
        </DropDown>
        <LocationDropDown />

        {/* <MyReservationTabDropDown tab="all" setTab={() => { }} className="w-full justify-start" /> */}
      </div>
      {/* for mobile view */}
      <div className="flex gap-3 mt-2 sm:hidden">
        <DrawerForPriceFilter />
        <DrawerForAllLocation />
      </div>
    </div>
  );
};

export default SearchAndFilterSection;
