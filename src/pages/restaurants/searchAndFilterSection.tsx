/* eslint-disable @typescript-eslint/no-unused-vars */
import { DropDown, LocationDropDown, SearchInputField } from "@/components";
import { Key, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import {
  useGetLoactionSuggestion,
} from "@/features/restaurant/restaurant";

const SearchAndFilterSection = () => {
  const [searchParams, setSeachParams] = useSearchParams();
  const query = searchParams.get("query");
  // const location = searchParams.get("location");
  // const price = searchParams.get("price");

  const exact_location = searchParams.get("exact_location") ?? undefined;

  const [searchQuery, setsearchQuery] = useState("");
  const [_locationSearch, setLoacationSearch] = useState("");
  // const [priceFilter, setPriceFilter] = useState("");
  const { restaurantSuggestions, isLoading: restaurantSuggestionIsLoading } =
    useGetLoactionSuggestion();

  // const {
  //   restaurantAccourdingPriceSuggestions,
  //   isLoading: restaurantAccourdingPriceSuggestionsIsLoading,
  // } = useRestaurantAccourdingPriceSuggestion();

  const restaurantSuggestion = useMemo(() => {
    if (!restaurantSuggestionIsLoading) {
      return restaurantSuggestions?.data.slice(0, 5);
    }
  }, [restaurantSuggestionIsLoading, restaurantSuggestions]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setsearchQuery(e.target.value);
  }

  function locationOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoacationSearch(e.target.value);
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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSeachParams((prev) => {
  //       prev.set("location", locationSearch);
  //       return prev;
  //     });
  //   }, 500);
  //   return () => clearInterval(timer);
  // }, [locationSearch, setSeachParams]);

  function placeSuggestionsChange(place: string) {
    setSeachParams((prev) => {
      prev.set("exact_location", place);
      return prev;
    });
  }

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
      <div className="lg:grid lg:grid-cols-2 flex gap-2 mt-3 lg:mt-0">
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

        <DropDown
          placeholder="All Locations"
          onValueChange={placeSuggestionsChange}
        >
          <SearchInputField
            defaultValue={exact_location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.stopPropagation();
              locationOnChange(e);
            }}
            placeholder=""
            searchIcon={true}
            className="w-[90%] mx-1"
          />

          <SelectGroup
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              e.stopPropagation();
            }}
            className="w-full overflow-y-scroll h-auto"
          >
            {!restaurantSuggestionIsLoading &&
              restaurantSuggestion.length !== 0 && (
                <SelectLabel>All locations</SelectLabel>
              )}
            {!restaurantSuggestionIsLoading &&
              restaurantSuggestion.map(
                (singleRestaurantSuggestion: string, i: Key) => (
                  <SelectItem
                    role="button"
                    onClick={(
                      e: React.MouseEvent<HTMLDivElement, MouseEvent>
                    ) => {
                      e.stopPropagation();
                    }}
                    key={i}
                    value={singleRestaurantSuggestion}
                  >
                    {singleRestaurantSuggestion}
                  </SelectItem>
                )
              )}
          </SelectGroup>
        </DropDown>
      </div>
      <LocationDropDown />
    </div>
  );
};

export default SearchAndFilterSection;
