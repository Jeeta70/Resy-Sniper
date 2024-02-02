import { DropDown, SearchInputField } from "@/components";
import { ChangeEvent, Key, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { useGetLoactionSuggestion } from "@/features/restaurant/restaurant";

const SearchAndFilterSection = () => {
  const [query, setSeachParams] = useSearchParams();
  const location = query.get("location");

  const [searchQuery, setsearchQuery] = useState("");
  const [locationSearch, setLoacationSearch] = useState("");
  const { restaurantSuggestions, isLoading: restaurantSuggestionIsLoading } =
    useGetLoactionSuggestion();

  const restaurantSuggestion = useMemo(() => {
    if (!restaurantSuggestionIsLoading) {
      return restaurantSuggestions?.data.slice(0,5);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeachParams((prev) => {
        prev.set("location", locationSearch);
        return prev;
      });
    }, 500);
    return () => clearInterval(timer);
  }, [locationSearch, setSeachParams]);

 

  function placeSuggestionsChange(place:string){
    setSeachParams((prev) => {
      prev.set("exact_location", place);
      return prev;
    });
    
  }

  return (
    <div className="lg:flex block gap-4">
      <SearchInputField
        onChange={onChange}
        placeholder="Search restaurant"
        searchIcon={true}
      />
      <div className="lg:grid lg:grid-cols-2 flex gap-2 mt-3 lg:mt-0">
        {/* <DropDown placeholder="All Prices">All price children</DropDown> */}
        <DropDown placeholder="All Locations" onValueChange={placeSuggestionsChange}>
          <SelectGroup className="w-full">
            <SearchInputField
              defaultValue={location}
              onChange={locationOnChange}
              placeholder=""
              searchIcon={true}
            />
            {!restaurantSuggestionIsLoading &&
              restaurantSuggestion.length !== 0 && (
                <SelectLabel>All locations</SelectLabel>
              )}
            {!restaurantSuggestionIsLoading && restaurantSuggestion.map(
              (singleRestaurantSuggestion: string, i: Key) => (
                <SelectItem key={i} value={singleRestaurantSuggestion}>
                  {singleRestaurantSuggestion}
                </SelectItem>
              )
            )}
          </SelectGroup>
        </DropDown>
      </div>
    </div>
  );
};

export default SearchAndFilterSection;
